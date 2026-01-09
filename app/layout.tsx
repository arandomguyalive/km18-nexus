import type { Metadata } from "next";
import { Geist, Geist_Mono, Pinyon_Script, Baskervville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

const baskervville = Baskervville({
  weight: "400",
  variable: "--font-baskervville",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The KM18 Nexus | Inner Billionaire & ABHED",
  description: "The official digital headquarters of Kinjal Mishra (KM18). Exploring the convergence of literature and cyberpunk technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pinyonScript.variable} ${baskervville.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeToggle />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
