import style from './youtuberlogo.module.css'
import youtube1 from './../../assets/youtube1.png'
import youtube2 from './../../assets/youtube2.png'
import youtube3 from './../../assets/youtube3.png'
import youtube4 from './../../assets/youtube4.png'
import youtube5 from './../../assets/youtube5.png'
import youtube6 from './../../assets/youtube6.png'
import youtube7 from './../../assets/youtube7.png'

function YoutuberLogo() {
    return(
        <div className={style.logoContainer}>
            
            <img src={youtube1} className={style.youtube1}/>
            <img src={youtube2} className={style.youtube1}/>
            <img src={youtube3} className={style.youtube3}/>
            <img src={youtube4} className={style.youtube4}/>

            <img src={youtube5} className={style.youtube5}/>
            <img src={youtube6} className={style.youtube6}/>
            <img src={youtube7} className={style.youtube4}/>
        </div>
    )
}

export default YoutuberLogo