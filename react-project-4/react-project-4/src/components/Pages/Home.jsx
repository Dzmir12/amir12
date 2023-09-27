import style from './Home.module.css'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import logo1 from './../../assets/logo1.png'
import addstory from './../../assets/addstory.png'
import Header from '../Header/Header'
import Story from '../Story/Story'
import Frame from '../Frame/Frame'
import Gallery from './../../assets/gallery.png'
import icon from './../../assets/icon.png'
import calender from './../../assets/calender.png'
import Contacs from '../Contacs/Contacs'
import Openion from '../Openion/Openion'
import rectangle from './../../assets/Rectangle.png'

import shape from './../../assets/shape.png'
import heart from './../../assets/heart.png'
import message2 from './../../assets/message-2.png'
import iconset from './../../assets/iconset.png'

import { useState } from 'react'







function Home() {


     const [Addpost, setAddpost] = useState("");
   

     function addPost(event) {
          setAddpost(event.target.value);

     }


     return (
          <div className={style.Home}>
               <div className={style.ContentLeft}>
                    <Logo />
                    <Navbar />
                    <div className={style.logoContainer}>
                         <img src={logo1} className={style.ContentLeftLogo} />
                         <p className={style.logoContainer1P}>Stay updated with the Socially mobile app</p>

                         <div className={style.logoP2Container}>
                              <p className={style.logoContainer2P}>Download Now</p>
                         </div>
                    </div>
               </div>


               <div className={style.ContentRight}>
                    <Header />


                    <div className={style.ContentRightContainer2}>
                         <div className={style.Content1}>
                              <div className={style.Content1FirstContent}>
                                   <div className={style.adStory}>
                                        <img src={addstory} />
                                        <p className={style.adStoryP}>Add Story</p>
                                   </div>
                                   <Story />
                                   <Story />
                                   <Story />
                                   <Story />
                                   <Story />
                              </div>

                              <div className={style.Content1secondContent}>
                                   {/* <Frame /> */}


                                   <div className={style.frame}>
                                        <img src={rectangle} className={style.rectangle} />
                                        <input type="text" className={style.frameInput} value={Addpost} onChange={addPost} placeholder='  What’s on your mind?' />
                                   </div>



                                   <div className={style.Container2secondContent}>
                                        <div className={style.secondContentImageContainer}>
                                             <img src={Gallery} />
                                             <img src={icon} />
                                             <img src={calender} />
                                        </div>

                                        <div className={style.secondContentbtn}>
                                             <button className={style.btnSecondContent}  >Create a post</button>
                                        </div>
                                   </div>
                              </div>




                              <div className={style.showPost}>
                                   <div className={style.UsernameIcon} id={style.UsernameIcon}>
                                        <div className={style.Icon}>
                                             <img src={rectangle} />
                                             <div className={style.UsernameIconPContainer}>
                                                  <p className={style.UsernameIcon1P}>Smith jems</p>
                                                  <p className={style.UsernameIcon2P}>12h ago </p>
                                             </div>
                                        </div>

                                        <div className={style.UsernameIconImage}>
                                             <img src={shape} />
                                        </div>
                                   </div>
                                   {Addpost}

                                   <div className={style.LikeComentShare}>
                                        <div className={style.LikeComent}>
                                             <div className={style.Like}>
                                                  <img src={heart} />

                                             </div>

                                             <div className={style.Like}>
                                                  <img src={message2} />
                                             </div>
                                        </div>


                                        <div className={style.Like}>
                                             <img src={iconset} />
                                             <p className={style.LikeP}>Share</p>
                                        </div>
                                   </div>
                              </div>



                              <div className={style.Content1ThiredContent}>
                                   <Openion />
                                   <div className={style.ThiredContentFrame}>
                                        <Frame />
                                   </div>
                              </div>
                         </div>


                         <div className={style.Content2}>
                              <Contacs />
                              <Contacs />
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Home