import { domainUrl, ogImage } from "../components/data/configs";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Abubakar Mulla | Software Engineer | Backend Engineer",
    template: "%s | Abubakar Mulla",
  },

  description:
    "Backend Engineer building scalable, secure, and production-grade backend systems with experience in payments, APIs, and system architecture.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.webmanifest",

  keywords: [
    "Backend Engineer",
    "Software Engineer",
    "Django Developer",
    "Spring Boot Developer",
    "Payment Systems",
    "Stripe Integration",
    "API Development",
    "Backend Architecture",
  ],

  authors: [
    {
      name: "Abubakar Mulla",
      url: new URL("https://www.linkedin.com/in/abubakarmulla23/"),
    },
  ],

  creator: "Abubakar Mulla",

  publisher: "Abubakar Mulla",

  metadataBase: new URL(domainUrl),

  applicationName: "Abubakar Mulla Portfolio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abubakar Mulla | Software Engineer | Backend Engineer",
    description:
      "Backend Engineer specializing in scalable backend systems, payment integrations, and production-ready architectures.",
    url: domainUrl,
    siteName: "Abubakar Mulla Portfolio",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Abubakar Mulla | Software Engineer | Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abubakar Mulla | Backend Engineer",
    description:
      "Backend Engineer focused on scalable systems, payments, and secure backend architecture.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Abubakar Mulla | Software Engineer | Backend Engineer",
      },
    ],
    creator: "@abubakarmulla",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: "Abubakar Mulla",
    statusBarStyle: "black-translucent",
  },

  appLinks: {
    web: {
      url: domainUrl,
      should_fallback: true,
    },
  },

  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-white antialiased">{children}</body>
    </html>
  );
}
