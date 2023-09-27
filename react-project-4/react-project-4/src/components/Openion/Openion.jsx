import style from "./Openion.module.css"
import prof from "./../../assets/prof.png"
import shape from './../../assets/shape.png'
import heart from './../../assets/heart.png'
import message2 from './../../assets/message-2.png'
import iconset from './../../assets/iconset.png'



function Openion() {

    return (
        <div className={style.openion}>
            <div className={style.UsernameIcon}>
                <div className={style.Icon}>
                    <img src={prof} />
                    <div className={style.UsernameIconPContainer}>
                        <p className={style.UsernameIcon1P}>Smith jems</p>
                        <p className={style.UsernameIcon2P}>12h ago </p>
                    </div>
                </div>

                <div className={style.UsernameIconImage}>
                    <img src={shape} />
                </div>
            </div>

            <p className={style.openionP}>In the fast-paced world of corporate life,it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife</p>

            <div className={style.LikeComentShare}>
                <div className={style.LikeComent}>
                    <div className={style.Like}>
                        <img src={heart} />
                        <p className={style.LikeP}>2.8K Likes</p>
                    </div>

                    <div className={style.Like}>
                        <img src={message2} />
                        <p className={style.LikeP}>7 Comments</p>
                    </div>
                </div>


                <div className={style.Like}>
                    <img src={iconset} />
                    <p className={style.LikeP}>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Openion