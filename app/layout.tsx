import "./globals.css";
import Header from "@/components/header";
import Footer from"@/components/footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <>
        <Header />
        {children}
        <Footer />
        </>
      </body>
    </html>
  );
}
