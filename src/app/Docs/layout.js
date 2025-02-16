import Header from "@/Components/header/Header";

export default function DocsLayout( {children} ) {

 
    return (
        <div>
            <Header />
             {children}
            </div>
    )

}