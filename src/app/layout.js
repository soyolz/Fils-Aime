import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Change the font

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800"]
})


// Shit like the website name on google 

export const metadata = {
  title: "Fils",
  description: "My professional portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
