import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        {/* @ts-ignore - line below is technically a Promise<Element> but works*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
