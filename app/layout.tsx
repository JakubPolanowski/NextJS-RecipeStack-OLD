import "../styles/globals.css";
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
        {/* @ts-ignore - although typescript is unhappy, the navbar is statically rendered by default and therefore the fact that it's return type is technically a Promise<Element> is not an actual problem*/}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
