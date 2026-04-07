import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { TitleAnimator } from "@/components/ui/TitleAnimator";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dasunnavindu.dev'),
  title: {
    default: "Dasun Navindu | QA Engineer & Software Tester",
    template: "%s | Dasun Navindu",
  },
  description: "Dasun Navindu is a Software Quality Assurance Engineer specializing in test automation, manual testing, and web development. View portfolio, skills, and experience.",
  keywords: ["Dasun Navindu", "QA Engineer", "Software Tester", "Test Automation", "Quality Assurance", "Sri Lanka QA", "Portfolio"],
  authors: [{ name: "Dasun Navindu", url: "https://www.dasunnavindu.dev" }],
  creator: "Dasun Navindu",
  publisher: "Dasun Navindu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://www.dasunnavindu.dev",
  },
  openGraph: {
    title: "Dasun Navindu | QA Engineer Portfolio",
    description: "Explore the professional portfolio of Dasun Navindu - QA Engineer specializing in test automation and software quality.",
    url: "https://www.dasunnavindu.dev",
    siteName: "Dasun Navindu Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.dasunnavindu.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dasun Navindu - QA Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasun Navindu | QA Engineer Portfolio",
    description: "Explore the professional portfolio of Dasun Navindu - QA Engineer specializing in test automation.",
    images: ["https://www.dasunnavindu.dev/og-image.png"],
    creator: "@dasunnavindu",
  },
  verification: {
    google: "4TLvozAI45zqbPugTt6z0Ze-dPI_f1JJ04hWxueh_zk",
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23020617"/><text x="50" y="50" font-size="45" font-family="sans-serif" font-weight="bold" fill="%233b82f6" dominant-baseline="central" text-anchor="middle">DN</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add this meta tag after you get your Google verification code */}
        {/* <meta name="google-site-verification" content="your-code-here" /> */}
      </head>
      <body>
        <ThemeProvider>
          <TitleAnimator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}