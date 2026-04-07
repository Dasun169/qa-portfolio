import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { TitleAnimator } from "@/components/ui/TitleAnimator";

export const metadata: Metadata = {
  title: "Dasun Navindu Dewnith | QA Engineer",
  description: "Software Quality Assurance Engineer | QA Automation Enthusiast",
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
      <body>
        <ThemeProvider>
          <TitleAnimator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}