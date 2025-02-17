import Header from "@/Components/organisms/header/Header"

export default function ClassicLayout({children}) {


return(
    <>
     <Header/>
      {children}
    </>
)

}