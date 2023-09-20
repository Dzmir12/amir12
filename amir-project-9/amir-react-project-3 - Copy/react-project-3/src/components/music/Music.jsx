import style from "./Music.module.css"
import music1 from './../../assets/music1.png'
import music2 from './../../assets/music2.png'
import music3 from './../../assets/music3.png'
import music4 from './../../assets/music4.png'

function Music() {
    
    return (
        <div className={style.Music}>
           <img src={music1} className={style.music1}/>
           <div className={style.musicName}>
             <p className={style.musicName1}>Sound name</p>
             <p className={style.musictime}>0:12</p>
           </div>
            <p className={style.MusicThiredP}>Confused excited crowd slight panic and distress</p>
            <p className={style.MusicForthP}>Shocking, jumpscare</p>

           <div className={style.musicImageContainer}>
            <img src={music2} className={style.music2} id={style.music2}/>
            <img src={music3} className={style.music2}/>
            <img src={music4} className={style.music2}/>
           </div>
        </div>
    )
        
    
}

export default Music