import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arundathi Institute of Medical Sciences | AIMS",
  description:
    "Arundathi Institute of Medical Sciences — a full-spectrum academic medical institution in Telangana. Explore MBBS admissions, clinical departments, and student resources.",
  keywords:
    "AIMS, Arundathi Institute of Medical Sciences, medical college, MBBS, NEET, Hyderabad, Telangana, hospital",
  openGraph: {
    title: "Arundathi Institute of Medical Sciences | AIMS",
    description: "Shaping compassionate, capable physicians for a healthier India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
