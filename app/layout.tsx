import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Suerte",
  description: "Commandez votre produit premium avec livraison dans toute l'Algérie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
