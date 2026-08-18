import { NextRequest, NextResponse } from 'next/server';

const PUROLATOR_API_KEY = process.env.PUROLATOR_API_KEY;
const PUROLATOR_API_PASSWORD = process.env.PUROLATOR_API_PASSWORD;
const PUROLATOR_ACCOUNT_NUMBER = process.env.PUROLATOR_ACCOUNT_NUMBER;
const PUROLATOR_API_BASE = process.env.PUROLATOR_API_BASE || 'https://webservices.purolator.com';

// Purolator's Estimating Service is a SOAP API secured with HTTP Basic Auth
// (API Key as username, API Password as password) plus a billing account
// number attached to every quote request. All three must be present.
export async function POST(req: NextRequest) {
  if (!PUROLATOR_API_KEY || !PUROLATOR_API_PASSWORD || !PUROLATOR_ACCOUNT_NUMBER) {
    const missing = [
      !PUROLATOR_API_KEY && 'PUROLATOR_API_KEY',
      !PUROLATOR_API_PASSWORD && 'PUROLATOR_API_PASSWORD',
      !PUROLATOR_ACCOUNT_NUMBER && 'PUROLATOR_ACCOUNT_NUMBER',
    ].filter(Boolean).join(', ');
    return NextResponse.json(
      { error: `Purolator is not fully configured. Missing: ${missing}. Basic Auth requires both the API Key and Password together — a key alone cannot authenticate.` },
      { status: 501 }
    );
  }

  try {
    const { destinationPostalCode, totalWeightKg } = await req.json();

    const soapBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header>
    <RequestContext xmlns="http://purolator.com/pws/datatypes/v2">
      <Version>2.0</Version>
      <Language>en</Language>
      <GroupID>plenish-beginning</GroupID>
      <RequestReference>web-checkout</RequestReference>
    </RequestContext>
  </soap:Header>
  <soap:Body>
    <GetQuickEstimate xmlns="http://purolator.com/pws/datatypes/v2">
      <BillingAccountNumber>${PUROLATOR_ACCOUNT_NUMBER}</BillingAccountNumber>
      <SenderPostalCode>M5V2T6</SenderPostalCode>
      <ReceiverPostalCode>${destinationPostalCode}</ReceiverPostalCode>
      <PackageWeight>${totalWeightKg}</PackageWeight>
    </GetQuickEstimate>
  </soap:Body>
</soap:Envelope>`;

    const res = await fetch(`${PUROLATOR_API_BASE}/PWS/V1/Estimating/EstimatingService.asmx`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: 'http://purolator.com/pws/service/v1/GetQuickEstimate',
        Authorization: 'Basic ' + Buffer.from(`${PUROLATOR_API_KEY}:${PUROLATOR_API_PASSWORD}`).toString('base64'),
      },
      body: soapBody,
    });

    const raw = await res.text();

    if (!res.ok) {
      console.error('Purolator error:', res.status, raw);
      return NextResponse.json({ error: 'Purolator rate lookup failed', detail: raw }, { status: res.status });
    }

    return NextResponse.json({ raw });
  } catch (err: any) {
    console.error('Purolator shipping-rate error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
