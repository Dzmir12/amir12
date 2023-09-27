import style from './Logo.module.css'
import logo1 from './../../assets/logo1.png'
function Logo() {
     return (
        <div className={style.logo}>
            <img src={logo1} className={style.logo1}/>
            <p  className={style.logoP}>My Social</p>
        </div>
     )
}


export default Logo