import Header from "@/Components/organisms/header/Header";

export default function DocsLayout( {children} ) {

 
    return (
        <div>
            <Header />
             {children}
            </div>
    )

}