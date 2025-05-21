'use client'
import { useEffect,useState } from "react";
import './style.css';


const Cursor = () => {
    
    const [cursorX,setCursorX] = useState(0);
    const [cursorY,setCursorY] = useState(0);

    const handleMouseMove = (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    }

    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
        }
    },[])

 return(<>
        <div style={{top:cursorY+'px'}} className="cursorx"></div>
        <div style={{left:cursorX+'px'}} className="cursory"></div>
    </>
 )

}

export default Cursor;