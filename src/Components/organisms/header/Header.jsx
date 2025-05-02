'use client'
import style from '@/styles/global.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
 
 const [isActive, setActive] = useState(false);

    return(
        <>
       
         <header className={style.header}>   
         <Link href={'/Home'}>
                   <div className={style.header_logo}>
                   <Image
                    src={'/eyelogov6.png'}
                    width={100}
                    height={75}
                    alt='logo'
                    priority={true}
                    />
                    EyeCode University
                   </div>
                   </Link>


                <div className={style.header_info}>
                   <nav className={style.header_nav}>
                        <ul>
                            <li><Link href="">О нас</Link></li>
                            <li><Link href="/Docs">Документы</Link></li>
                            <li><Link href="/Home#footer">Контакты</Link></li>
                            <li><Link href="/Events">События</Link></li>
                            
                        </ul>
                   </nav>
                   
                   <button>
                    <Link href={'https://github.com/southsidescript'}> 
                    <Image
                     src={'/github-mark-white.png'}
                     width={30}
                     height={30}
                     alt='git-hub'
                    />
                    </Link>
                   </button>

                   <button onClick={()=>{
                    setActive(!isActive);
                   }} className={style.mobile}>
                   </button>
                </div>
         </header>

           {isActive?<header className={style.mobile_header}>
                <nav className={style.mobile_header_nav}>

                <ul onClick={()=>{
                    setActive(false);
                }}>
                            <li><Link href="#">О нас</Link></li>
                            <li><Link href="/Docs">Документы</Link></li>
                            <li><Link href="#footer">Контакты</Link></li>
                            <li><Link href="/Events">События</Link></li>
                            
                </ul>
                </nav>
            
            </header>:''}
            
         </>
         
        )
}

export default Header;