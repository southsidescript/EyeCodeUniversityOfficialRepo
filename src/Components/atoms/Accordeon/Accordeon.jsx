const Accordeon = ({children,summary}) => {


 return (  

    <details>
        <summary> {summary} </summary>
        <p> {children}</p>
    </details>
 )
 


}

export default Accordeon;