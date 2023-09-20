import style from './footer.module.css'
import WavesCo from './../../assets/WavesCo.png'



function Footer() {
    
    return (
        <div className={style.footer}>
            <div className={style.footerContent1}>
                <div className={style.footerContentLogo}>
                     <img src={WavesCo}  className={style.footerLogo}/>
                     <p className={style.footerFirstP}>WavesCo is a platform for providing premium sound effects for Youtube videos, movies and many more.</p>
                     <p className={style.footerSecondP}>WavesCo ©2021, All rights reserved</p>
                </div>

                <div className={style.footerProductCompany}>
                    <div className={style.footerProduct}>
                        <p className={style.footer1stP}>Product</p>
                        <p className={style.footer2stP}>Browse sounds</p>
                        <p className={style.footer2stP}>Pricing</p>
                        <p className={style.footer2stP}>FAQ</p>
                        <p className={style.footer2stP}>Affiliate</p>
                    </div>
                    <div className={style.footerCompany}>
                    <p className={style.footer1stP}>Company</p>
                        <p className={style.footer2stP}>Blog</p>
                        <p className={style.footer2stP}>About us</p>
                        <p className={style.footer2stP}>Help</p>
                        <p className={style.footer2stP}>Career</p>
                    </div>
                </div>
            </div>

            <div className={style.footerContent2}>
                        <p className={style.footer3stP}>Social Media</p>
                        <p className={style.footer4stP}>Twitter</p>
                        <p className={style.footer4stP}>Instagram</p>
                        <p className={style.footer4stP}>YouTube</p>
                        <p className={style.footer4stP}>Facebook</p>
            </div>
        </div>
    )
}


export default Footer;