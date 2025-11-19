/* [NOTE, hyunnnchoi, 2025.11.19] Tailwind CSS로 레이아웃 재디자인 */
import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hyunnnchoi.log",
  description: "Personal blog of Hyunnnchoi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
