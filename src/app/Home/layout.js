import Container from "@/Components/organisms/Containers/container/Container"
import Footer from "@/Components/sections/Footer/Footer";
import Consult from "@/Components/sections/Consult/Consult";
import About from "@/Components/sections/About/About";
export default function RootLayout({ children }) {
    return (
      <>

     <Container>
      {children}
      
     </Container>
        <About/>
      <Consult/>
   

      <Footer/>
     </>
    );
  }
  