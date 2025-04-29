import style from '@/styles/global.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    
    return(
        <footer className={style.footer}>
           
            <div>
                 <div className={style.footer_copy}>
                    <p>©2025 EyeCode University.Все права защищены.</p>
                    <div className={style.footer_copy_social}>
                        <ul>
                            <Link href='#'><li><Image src={'/github-mark-white.png'} width={30} height={30} alt='github'></Image>  </li></Link>
                            <Link href='#'><li><Image src={'/wa.png'} width={30} height={30} alt='github'></Image>  </li></Link>
                            <Link href='#'><li><Image src={'/github-mark-white.png'} width={30} height={30} alt='github'></Image>  </li></Link>
                        </ul>
                   
                    </div>
                 </div>
   

            </div>
            
           <div className={style.footer_logo}>
          
            <h1>EyeCode University</h1>
           
            </div>

        </footer>
    )
}

export default Footer;