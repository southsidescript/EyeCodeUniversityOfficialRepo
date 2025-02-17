import style from '@/styles/global.module.scss'
import Image from 'next/image';
const Header = () => {

    return(
        <header className={style.header}>   
                   <div className={style.header_logo}>
                   <Image
                    src={'/eyelogov6.png'}
                    width={110}
                    height={82}
                    alt='logo'
                    />
                    EyeCode University
                   </div>

                   <div className={style.header_menu}>
                    <Image
                    src={'/mobile-menu.png'}
                    width={32}
                    height={32}   
                    alt='mobile-menu'
                    />
                   </div>

                    
                </header>
    )
}

export default Header;