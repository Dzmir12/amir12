import style from './ResturantAdevertising.module.css'
import burgerc from './../../assets/burgerc.png'

function ResturantAdervertising() {
  return (
    <div className={style.resturantAdervertising}>
      <img src={burgerc} className={style.resturantAdervertisingImg} />
      <div  className={style.resturantAdervertisingContainer}>
        <h3 className={style.resturantAdervertisingH3}> Subcribe To Our Newsletter</h3>
        <p  className={style.resturantAdervertisingP}> Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.</p>

        <div className={style.resturantAdervertisingInputContainer}>
            <input type="text"  className={style.resturantAdervertisingInput} placeholder='   Type your email.....'/>
            <button   className={style.resturantAdervertisingBtn}>SUBCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default ResturantAdervertising