import style from './Story.module.css'
import circle from './../../assets/circle.png'

function Story() {
    
    return (
        <div className={style.story}>
           <img src={circle} className={style.circle}/>
           <p className={style.storyP}>Esther Howard</p>
        </div>
    )
}

export default Story