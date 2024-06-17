import { DM_Sans } from 'next/font/google'
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Built By Dan",
  description: "if you're reading this then welcome to the source code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}