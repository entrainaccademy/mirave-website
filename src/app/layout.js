import { Fraunces, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
});

const description =
  "Discover premium coffee and food at Mireva Café, plus two private event halls for meetings, engagements and celebrations of up to 200 guests.";

export const metadata = {
  title: {
    default: "Mireva Café | Premium Coffee & Private Event Halls",
    template: "%s | Mireva Café",
  },
  description,
  keywords: [
    "premium café",
    "imported coffee",
    "event hall",
    "party hall",
    "meeting room hire",
    "engagement venue",
    "Mireva Café",
  ],
  openGraph: {
    type: "website",
    siteName: "Mireva Café",
    title: "Mireva Café | Premium Coffee & Private Event Halls",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mireva Café | Premium Coffee & Private Event Halls",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#4a2a1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        {children}
      </body>
    </html>
  );
}
