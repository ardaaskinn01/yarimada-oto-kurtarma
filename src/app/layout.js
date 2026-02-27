import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "İzmir, Karaburun ve Urla Çekici | 7/24 Oto Kurtarma ve Yol Yardım",
  description: "İzmir, Karaburun, Urla ve Çeşme bölgelerinde 7/24 oto kurtarma, çekici ve acil yol yardım hizmeti. Hızlı ve güvenilir destek için hemen arayın!",
  keywords: "oto kurtarma, çekici, yol yardım, izmir çekici, karaburun çekici, urla çekici, mordoğan çekici, araç çekici, acil çekici, 7/24 oto kurtarma",
  openGraph: {
    title: "İzmir 7/24 Oto Kurtarma ve Çekici",
    description: "İzmir ve ilçelerinde güvenilir, hızlı, garantili oto kurtarma ve acil yol yardım.",
    url: "https://yarimadaotokurtarma.com.tr",
    siteName: "Yarımada Oto Kurtarma",
    locale: "tr_TR",
    type: "website",
  },
};

import Script from 'next/script';

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRescue",
    "name": "Yarımada Oto Kurtarma",
    "image": "https://yarimadaotokurtarma.com.tr/(4).jpeg",
    "url": "https://yarimadaotokurtarma.com.tr",
    "telephone": "+905340314004",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "194. Sokak No:24",
      "addressLocality": "Mordoğan, Karaburun",
      "addressRegion": "İzmir",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.5135,
      "longitude": 26.6214
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/11.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17178419606"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17178419606');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {children}
      </body>
    </html>
  );
}


