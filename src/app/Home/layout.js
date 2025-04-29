import Container from "@/Components/organisms/Containers/container/Container"
import Footer from "@/Components/sections/Footer/Footer";
export default function RootLayout({ children }) {
    return (
      <>

     <Container>
      {children}
     </Container>
  <Footer/>
     </>
    );
  }
  