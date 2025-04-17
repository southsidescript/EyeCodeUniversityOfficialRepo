const Accordeon = ({children,summary}) => {


 return (  

    <details>
        <summary> {props.summary} </summary>
        <p> {children}</p>
    </details>
 )
 


}