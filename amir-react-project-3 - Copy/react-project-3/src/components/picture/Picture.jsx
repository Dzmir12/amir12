import style from './picture.module.css'
import pic1 from './../../assets/pic1.png'
import pic2 from './../../assets/pic2.png'
import pic3 from './../../assets/pic3.png'
import pic4 from './../../assets/pic4.png'
import pic5 from './../../assets/pic5.png'
import pic6 from './../../assets/pic6.png'
import pic7 from './../../assets/pic7.png'
import pic8 from './../../assets/pic8.png'
import pic9 from './../../assets/pic9.png'
import pic10 from './../../assets/pic10.png'
import pic11 from './../../assets/pic11.png'
import pic12 from './../../assets/pic12.png'

function Picture() {
    return (
        <div className={style.picture}>
            <img src={pic1} className={style.pic}/>
            <img src={pic2} className={style.pic}/>
            <img src={pic3} className={style.pic}id={style.pic3}/>
            <img src={pic4} className={style.pic}id={style.pic4}/>
            <img src={pic5} className={style.pic}id={style.pic5}/>
            <img src={pic6} className={style.pic}id={style.pic6}/>
            <img src={pic7} className={style.pic} id={style.pic}/>
            <img src={pic8} className={style.pic} id={style.pic}/>
            <img src={pic9} className={style.pic} id={style.pic}/>
            <img src={pic10} className={style.pic}id={style.pic}/>
            <img src={pic11} className={style.pic}id={style.pic}/>
            <img src={pic12} className={style.pic}id={style.pic}/>
        </div>
    )
}

export default Picture