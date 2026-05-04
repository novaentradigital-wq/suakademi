import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suakademiturkiye.com.tr"),
  title: {
    default: "Su Akademi Türkiye® — Sağlıklı Yaşamın Suyla Buluştuğu Yer",
    template: "%s | Su Akademi Türkiye®"
  },
  description:
    "Kocaeli'nin ilk akuatik terapi merkezi. Uluslararası standartlarda yüzme eğitimi, akuatik terapi, AquaFitness ve wellness hizmetleri. 0-99 yaş herkes için.",
  keywords: [
    "Su Akademi Türkiye",
    "akuatik terapi Kocaeli",
    "yüzme kursu İzmit",
    "Watsu",
    "Halliwick",
    "Bad Ragaz",
    "Klinik Ai Chi",
    "Aqua Fitness",
    "bebek yüzme",
    "hidroterapi"
  ],
  openGraph: {
    title: "Su Akademi Türkiye® — Sağlıklı Yaşamın Suyla Buluştuğu Yer",
    description:
      "Kocaeli'nin ilk akuatik terapi merkezi. Uluslararası sertifikalı kadromuzla 0-99 yaş herkese hizmet.",
    type: "website",
    locale: "tr_TR",
    siteName: "Su Akademi Türkiye"
  },
  twitter: {
    card: "summary_large_image",
    title: "Su Akademi Türkiye® — Sağlıklı Yaşamın Suyla Buluştuğu Yer"
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#0A4D68",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-bg-primary text-ink-dark font-body antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
