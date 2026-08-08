import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plenish Beginning | Authentic Salt-Free Caribbean Seasonings",
  description: "Non-GMO, MSG-free herb blends that support gut health and bring authentic Caribbean flavor to your kitchen. Shop online at plenishb.ca",
  keywords: "salt-free seasonings, Caribbean spices, non-GMO, MSG-free, herb blends, gut health, pimento, jerk seasoning",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
