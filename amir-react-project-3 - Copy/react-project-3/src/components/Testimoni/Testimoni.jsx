import  style from './Testimoni.module.css'
import test1 from './../../assets/test1.png'
import test2 from './../../assets/test2.png'

function Testimoni() {
     return (
        <div className={style.Testimoni}>
                 <img src={test1} className={style.test1}/>
                 <p  className={style.TestimoniFirstP}>The sounds from WavesCo is great and it really helps our team to save time and production costs.</p>
                 <img src={test2} className={style.test2}/>
                 <p className={style.TestimoniSecondP}>Anne Joyce</p>
                 <p className={style.TestimoniThiredP}>Video editor at Dude Perfect</p>
        </div>
     )
}


export default Testimoni;