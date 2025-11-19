import type { Metadata } from "next";
import "@/styles/globals.css";
import styles from "@/styles/layout.module.css";
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
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
