
import "./globals.css";
import Navbar from "@/app/Componants/Navbar";
import { ThemeProvider } from "@/app/theme-provider"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
