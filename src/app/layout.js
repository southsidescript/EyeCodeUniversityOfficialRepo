import localFont from "next/font/local";
import "./globals.css";
import SendContextApi from "@/Context/Context";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EyeCode University Stats",
  description: "Welcome to EyeCode University Stats",
    icons: {
      icon:'/eyelogov6.png',
    }
};

export default function RootLayout({ children }) {
  return (
    
      <SendContextApi>
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
                                {children}
        </body>
        </html>
      </SendContextApi>

  );
}
