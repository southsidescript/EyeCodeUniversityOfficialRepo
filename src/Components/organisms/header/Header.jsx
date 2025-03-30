import style from '@/styles/global.module.scss'
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {

    return(
       
         <header className={style.header}>   
         <Link href={'/Stats'}>
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
                            <li><Link href="">Контакты</Link></li>
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
                </div>
                </header>
            
    )
}

export default Header;