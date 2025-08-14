import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from "@/components/shared/custom-cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Mashuk - Full-Stack Developer",
    template: "%s | Mashuk",
  },
  description:
    "Personal portfolio of Mashuk, a full-stack developer, showcasing projects, skills, and services.",
  icons: {
    icon: "public/mashuk-profile.jpg", // This is the new favicon line
  },
  openGraph: {
    title: "Mashuk - Full-Stack Developer",
    description:
      "Welcome to my digital space. Explore my work, skills, and get in touch.",
    url: "https://your-domain.com",
    siteName: "Mashuk Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mashuk - Full-Stack Developer",
    description: "Personal portfolio of Mashuk, a full-stack developer.",
    creator: "@mastherock15",
    images: ["https://your-domain.com/twitter-image.png"], // Replace with your actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1724" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased", inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
