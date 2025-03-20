import Header from "@/Components/organisms/header/Header";
import Container from "@/Components/organisms/Containers/container/Container";
import ContainerWrapper from "@/Components/organisms/Containers/container-wrapper/ContainerWrapper";

export default function RootLayout({ children }) {
    return (
      
         <>
        
        <ContainerWrapper>
          <Container>
             <Header/> 
          </Container>
        </ContainerWrapper>
              
            <Container>
              <main>
                {children}
              </main>
              </Container>
        </>
    );
  }
  