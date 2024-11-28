
import "./globals.css";
import Navbar from "@/app/Componants/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
