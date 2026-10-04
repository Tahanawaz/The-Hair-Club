import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOIR & CO. | Premium Men's Salon Lahore",
  description: "Precision haircuts, beard sculpting, skin care and modern grooming at NOIR & CO., a premium men's salon in Lahore.",
  openGraph: { title: "NOIR & CO. | Modern Men's Grooming", description: "Precision cuts. Considered grooming. Book your chair in Lahore.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
