import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "../components/Header";

export const metadata = {
  title: "Built By Dan",
  description: "if you're reading this then welcome to the source code",
};

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmsans.variable}>
      <body className="container mx-auto pt-7">
        <Header />
        {children}
      </body>
    </html>
  );
}
