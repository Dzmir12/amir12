import style from './NavbarLeft.module.css'
import home from './../../assets/home-2.png'
import message from './../../assets/message-text.png'
import user from './../../assets/user.png'
import save from './../../assets/save.png'
import activity from './../../assets/activity.png'

function Navbar() {
    return (
        <div className={style.navbar}>
           <div className={style.navbarItemContainer}>
           <img src={home} className={style.navbarlogo} />
           <p  className={style.navbarText}>Home</p>
           </div>

           <div className={style.navbarItemContainer}>
           <img src={message} className={style.navbarlogo} />
           <p  className={style.navbarText}>Messages</p>
           </div>

           <div className={style.navbarItemContainer}>
           <img src={user} className={style.navbarlogo} />
           <p  className={style.navbarText}>Profile</p>
           </div>

           <div className={style.navbarItemContainer}>
           <img src={save} className={style.navbarlogo} />
           <p  className={style.navbarText}>Saved post</p>
           </div>

           <div className={style.navbarItemContainer}>
           <img src={activity} className={style.navbarlogo} />
           <p  className={style.navbarText}>Marketplace</p>
           </div>

        </div>
    )
}

export default  Navbar