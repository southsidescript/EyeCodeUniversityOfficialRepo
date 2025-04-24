import localFont from "next/font/local";
import "@/app/global.css";
import SendContextApi from "@/Context/Context";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/Components/organisms/header/Header";
import Container from "@/Components/organisms/Containers/container/Container";
import ContainerWrapper from "@/Components/organisms/Containers/container-wrapper/ContainerWrapper";


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
  title: "EyeCode University",
  description: "EyeCode University — это университет нового поколения. Здесь нет потока. Есть ты, твой наставник и результат. Мы обучаем так, как хотели бы учиться сами.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "It Courses",
      "name": "EyeCode university",
      "url": "https://www.eyecodeuniversity.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Russia",
        "addressLocality": "Russia",
        "addressCountry": "RU"
      },
      "telephone": "+7 928 352 65 84"
    }),
  },
    icons: {
      icon:'/eyedark.jpg',
    }
};

export default function RootLayout({ children }) {
  return (
    
      <SendContextApi>
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
                 
        <ContainerWrapper>
          <Container>
             <Header/> 
          </Container>
        </ContainerWrapper> 
       
                                {children}
 
        <SpeedInsights />
        </body>
        </html>
      </SendContextApi>

  );
}
