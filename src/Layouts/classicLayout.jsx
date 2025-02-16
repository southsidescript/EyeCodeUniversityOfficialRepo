import Header from "@/Components/header/Header"

export default function ClassicLayout({children}) {


return(
    <>
     <Header/>
      {children}
    </>
)

}