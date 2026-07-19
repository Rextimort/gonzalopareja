import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalopareja.com"),
  title: {
    default: "Gonzalo Pareja — Libertad estructural",
    template: "%s — Gonzalo Pareja",
  },
  description:
    "Un diagnóstico para entender qué limita hoy tu capacidad de avanzar y cuál es tu punto de entrada para recuperar dirección, margen y libertad de decisión.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Gonzalo Pareja",
    title: "Una vida con opciones se construye antes de necesitarlas.",
    description: "Capacidad, margen y dirección para recuperar libertad real de decisión.",
    images: [{ url: "/og-home.png", width: 1731, height: 909, alt: "Gonzalo Pareja — Capacidad, margen y dirección" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Una vida con opciones se construye antes de necesitarlas.",
    description: "Capacidad, margen y dirección para recuperar libertad real de decisión.",
    images: ["/og-home.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
