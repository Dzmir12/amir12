import style from './header.module.css'
import image2 from './../../assets/img2.svg'
import frame81 from './../../assets/Frame 81.png'
import search from './../../assets/search.png'

function Header() {


    return(
        <div className={style.header}>
          <div className={style.mainHeaderContainer}>
               <div className={style.mainHeader}>

                    <img src={image2}  />

                    <div className={style.nav}>
                      <p className={style.navP}>Home</p>
                      <p className={style.navP}>Best for Youtube</p>
                      <p className={style.navP}>Category</p>
                      <p className={style.navP}>Upgrade</p>
                     <p className={style.navP}>FAQ</p>
                     <button className={style.headerBtn}>Login</button>
                     <img src={frame81}  className={style.headerLogo} />
                    </div>

               </div>

               <div className={style.line}></div>
            </div>

            <div className={style.headerContent}>
                <p className={style.headerContentFirstP}>Free download sound effects without copyright</p>
                <p className={style.headerContentSecondP}>Download free copyright sound effect for your YouTube video and any use.</p>
                <div  className={style.headerInput}>
                 <input type="text" className={style.headerContentInput} placeholder='            Search sound effects'/>
                 <img src={search}  className={style.search}/>
                </div>
                 <p className={style.headerContentThirdP}>Try keyword: happy, funny, natural, horror, jumpscare and more</p>
                 <p className={style.headerContentForthP}>650.654 Available Sounds. Library Updated Weekly. <a>See popular sounds</a></p>
            </div>
        </div>
    )
}


export default Header;