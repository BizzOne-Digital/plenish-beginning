import { NextRequest, NextResponse } from 'next/server';

const PUROLATOR_API_KEY = process.env.PUROLATOR_API_KEY;
const PUROLATOR_API_PASSWORD = process.env.PUROLATOR_API_PASSWORD;
const PUROLATOR_ACCOUNT_NUMBER = process.env.PUROLATOR_ACCOUNT_NUMBER;
// devwebservices.purolator.com for the sandbox key, webservices.purolator.com once a
// Production key/password/account are issued (separate application, see Purolator's
// "Move to Production" step).
const PUROLATOR_API_BASE = process.env.PUROLATOR_API_BASE || 'https://devwebservices.purolator.com';

const SENDER_POSTAL_CODE = 'M5V2T6'; // TODO: replace with the real warehouse/ship-from postal code

function extractTag(xml: string, tag: string): string | undefined {
  const match = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
  return match?.[1];
}

export async function POST(req: NextRequest) {
  if (!PUROLATOR_API_KEY || !PUROLATOR_API_PASSWORD || !PUROLATOR_ACCOUNT_NUMBER) {
    const missing = [
      !PUROLATOR_API_KEY && 'PUROLATOR_API_KEY',
      !PUROLATOR_API_PASSWORD && 'PUROLATOR_API_PASSWORD',
      !PUROLATOR_ACCOUNT_NUMBER && 'PUROLATOR_ACCOUNT_NUMBER',
    ].filter(Boolean).join(', ');
    return NextResponse.json(
      { error: `Purolator is not fully configured. Missing: ${missing}.` },
      { status: 501 }
    );
  }

  try {
    const { destinationPostalCode, destinationCity, destinationProvince, totalWeightKg } = await req.json();

    const soapBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <RequestContext xmlns="http://purolator.com/pws/datatypes/v2">
      <Version>2.0</Version>
      <Language>en</Language>
      <GroupID>plenish-beginning</GroupID>
      <RequestReference>web-checkout</RequestReference>
    </RequestContext>
  </soap:Header>
  <soap:Body>
    <GetQuickEstimateRequest xmlns="http://purolator.com/pws/datatypes/v2">
      <BillingAccountNumber>${PUROLATOR_ACCOUNT_NUMBER}</BillingAccountNumber>
      <SenderPostalCode>${SENDER_POSTAL_CODE}</SenderPostalCode>
      <ReceiverAddress>
        <City>${destinationCity || ''}</City>
        <Province>${destinationProvince || ''}</Province>
        <Country>CA</Country>
        <PostalCode>${destinationPostalCode}</PostalCode>
      </ReceiverAddress>
      <PackageType>CustomerPackaging</PackageType>
      <TotalWeight>
        <Value>${totalWeightKg || 1}</Value>
        <WeightUnit>kg</WeightUnit>
      </TotalWeight>
    </GetQuickEstimateRequest>
  </soap:Body>
</soap:Envelope>`;

    const res = await fetch(`${PUROLATOR_API_BASE}/EWS/V2/Estimating/EstimatingService.asmx`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://purolator.com/pws/service/v2/GetQuickEstimate',
        Authorization: 'Basic ' + Buffer.from(`${PUROLATOR_API_KEY}:${PUROLATOR_API_PASSWORD}`).toString('base64'),
      },
      body: soapBody,
    });

    const raw = await res.text();

    if (!res.ok) {
      console.error('Purolator error:', res.status, raw);
      return NextResponse.json({ error: 'Purolator rate lookup failed', detail: raw }, { status: res.status });
    }

    const errorBlock = raw.match(/<Error>([\s\S]*?)<\/Error>/);
    if (errorBlock) {
      const description = extractTag(errorBlock[1], 'Description');
      console.error('Purolator business error:', raw);
      return NextResponse.json({ error: description || 'Purolator returned an error' }, { status: 422 });
    }

    const estimates = [...raw.matchAll(/<ShipmentEstimate>([\s\S]*?)<\/ShipmentEstimate>/g)].map(([, block]) => ({
      service: extractTag(block, 'ServiceID'),
      transitDays: Number(extractTag(block, 'EstimatedTransitDays')),
      expectedDeliveryDate: extractTag(block, 'ExpectedDeliveryDate'),
      totalPrice: Number(extractTag(block, 'TotalPrice')),
    }));

    return NextResponse.json({ estimates });
  } catch (err: any) {
    console.error('Purolator shipping-rate error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
