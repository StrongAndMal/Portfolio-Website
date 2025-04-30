import { Inter } from "next/font/google";
import "./globals.css";

// Importing Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO and browser information
export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main content wrapper */}
        <main className="min-h-screen bg-white dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
