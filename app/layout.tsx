import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DYM Digital | Soluciones Digitales y Software",
  description:
    "DYM Digital crea soluciones digitales, software, sitios web, automatizaciones, embudos de venta, campañas publicitarias e identidad de marca para negocios que quieren crecer.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden bg-black text-white antialiased">{children}</body>
    </html>
  );
}
