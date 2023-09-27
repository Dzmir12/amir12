import style from './header.module.css'
import search from './../../assets/search-normal.png'
import user from   './../../assets/Userprofile.png'
import arrow from   './../../assets/arrow.png'

function Header() {
     return (
        <div className={style.header}>
            <div className={style.headerContainer}>
              <div  className={style.headerContainer1}>
               <div  className={style.pContainer}>
               <p className={style.headerContainer1P}>Explore</p>
               </div>

               <div  className={style.pContainer} id={style.fixed}>
               <p className={style.headerContainer1P} >Community post</p>
               </div>

               <div  className={style.pContainer}>
               <p className={style.headerContainer1P}>Pages</p>
               </div>

              </div>

              <div className={style.headerContainer2}>
                <div className={style.inputContainer}>
                    <input type="text" className={style.input} placeholder=' Search'/>
                    <img src={search} className={style.inputImage}/>
                </div>

                <div className={style.headerLogoContainer2}>
                    <img src={user} />
                    <div className={style.PContainer2}>
                         <p className={style.Container2P1}>Chandan S</p>
                         <p className={style.Container2P2}>@uiuxchandan</p>
                    </div>
                    <img src={arrow} className={style.arrow} />
                </div>
              </div>

            </div>
        </div>
     )
}


export default Header