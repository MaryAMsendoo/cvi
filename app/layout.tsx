import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "Citizens Voices International | CVI",
    template: "%s | Citizens Voices International",
  },
  description:
    "Citizens Voices International empowers citizens and young people for inclusive governance in Nigeria's Middle Belt.",
  openGraph: {
    title: "Citizens Voices International | CVI",
    description:
      "Citizens Voices International empowers citizens and young people for inclusive governance in Nigeria's Middle Belt.",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 64,
        height: 64,
        alt: "Citizens Voices International logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Citizens Voices International | CVI",
    description:
      "Citizens Voices International empowers citizens and young people for inclusive governance in Nigeria's Middle Belt.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}