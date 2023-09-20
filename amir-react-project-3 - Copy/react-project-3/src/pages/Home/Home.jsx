import style from './home.module.css'
import YoutuberLogo from '../../components/youtuberlogo/YoutuberLogo'
import Music from '../../components/music/Music'
import Picture from '../../components/picture/Picture'
import Frame63 from '../../components/frame63/frame63'
import Testimoni from '../../components/Testimoni/Testimoni'
import divider from './../../assets/Divider.png'

function Home() {
     return (
        <div className= {style.home}>
            <div className= {style.firstContent} >
                <p className= {style.firstContentP}>Trusted by top Youtuber and Production House</p>
                 <YoutuberLogo />
            </div>

            <div className= {style.secondContent}>
                <p className= {style.secondContentFirstP}>Best sound effects for youtube videos</p>
                <div className= {style.secondContentPContainer}>
                    <p className= {style.secondContentSecondP}>All</p>
                    <p className= {style.secondContentSecondP}>Jumpscare</p>
                    <p className= {style.secondContentSecondP}>Mellow</p>
                    <p className= {style.secondContentSecondP} id={style.secondContentRemove}>Happiness</p>
                    <p className= {style.secondContentSecondP} id={style.secondContentRemove}>Ambience</p>
                    <p className= {style.secondContentSecondP} id={style.secondContentRemove}>Zonk</p>
                </div>

                 < Music />
                 < Music />
                 < Music />
                 < Music />
                 < Music />
                 < Music />

                 <a className={style.secondContenta}>See all sound effects</a>
            </div>

            <div className= {style.thirdContent}>
                <p className= {style.thirdContentOnestP}>Browse by category</p>
                <Picture />
                <a className={style.secondContenta}>See all category</a>
            </div>

            <div className={style.forthContent}>
                <div className={style.forthContentFirstContent}>
                    <p className={style.forthContentFirstP}>WHY US?</p>
                    <p className={style.forthContentSecondP}>We are provide the best quality sound effects without copyright.</p>
                </div>

                <div className={style.forthContentSecondContent}>
                    <div className={style.forthContentSecondContent1}>
                           <Frame63 />
                           <Frame63  className={style.frame63}/>
                    </div>
                    <div className={style.forthContentSecondContent2}>
                           <Frame63 />
                           <Frame63 className={style.frame63} />
                    </div>
                </div>

            </div>
             
             <div className={style.fifthContent}>
                 <p className={style.forthContentFirstP}>TESTIMONIALS</p>
                 <p className={style.fifthContentFirstP}>Hear good experiences from our customers</p>
                 <div className={style.fifthContentContainer}>
                    <div>
                    <Testimoni />
                    </div>
                    <div className={style.removeTestimoni}>
                    <Testimoni />
                    </div>
                     
                    <div className={style.removeTestimoni2}>
                    <Testimoni />
                    </div>

                 </div>
                 <img src={divider} className={style.divider} />
             </div>
        </div>
     )
}


export default Home