import style from "./Footer.module.css"
import logo from './../../assets/logo.png'
import Facebookicon from './../../assets/Facebookicon.png'
import Twittericon from './../../assets/Twittericon.png'
import Linkindicon from './../../assets/Linkindicon.png'
import instagramicon from './../../assets/instagramicon.png'
import inputicon from './../../assets/inputicon.png'

function Footer() {

    return (
        <div className={style.Footer}>
            <div>
                <img src={logo} className={style.logo}/>
                <p className={style.content1p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.</p>
                <div className={style.socialIconContainer}>
                    <img src={Facebookicon}/>
                    <img src={Twittericon} />
                    <img src={Linkindicon} />
                    <img src={instagramicon} />
                </div>
            </div>

            <div className={style.content2}>
                <p className={style.content2p}>Opening Restaurant</p>
                <p className={style.content2Secondp}>Sat-Wet: 09:00am-10:00PM</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed}`} >Thursdayt: 09:00am-11:00PM</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed}`}>Friday: 09:00am-8:00PM</p>
               
            </div>

            <div className={style.content2}>
                <p className={`${style.content2p} ${style.content2pfixed}`}>User Link</p>
                <p className={style.content2Secondp}>About Us</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed} ${style.content2Secondfixed}`} >Contact Us</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed} ${style.content2Secondfixed}`}>Order Delivery</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed} ${style.content2Secondfixed}`}>Payment & Tex</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed} ${style.content2Secondfixed}`}>Terms of Services</p>
               
            </div>

            
            
            <div className={style.content2}>
                <p className={`${style.content2p} ${style.content2pMarginFixed}`}>Contact Us</p>
                <p className={style.content2Secondp}>1234 Country Club Ave</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed}`} >NC 123456, London, UK</p>
                <p className={`${style.content2Secondp} ${style.content2Secondpfixed}`}>+0123 456 7891</p>

                <div className={style.content2InputContainer}> 
                    <input type="text" className={style.content2Input}  placeholder="    Enter your email...."/>
                    <img src={inputicon} className={style.content2InputIcon} />

                </div>
                 
               
            </div>




        </div>
    )
}

export default Footer