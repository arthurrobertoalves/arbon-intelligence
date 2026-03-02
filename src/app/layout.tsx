import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arbon | AI-Native Platform",
  description:
    "Especialistas e engenheiros de IA que entregam em dias as suas iniciativas dos próximos meses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
