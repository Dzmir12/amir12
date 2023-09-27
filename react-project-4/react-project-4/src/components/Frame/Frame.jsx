import style from './Frame.module.css'
import rectangle from './../../assets/Rectangle.png'
import { useState } from 'react'



function Frame() {
    
   const[Addpost,setAddpost]=useState("");

    function addPost(event) {
        setAddpost(event.target.value);
        
    }

    return (
        <div className={style.frame}>
            <img src={ rectangle} className={style.rectangle} />
            <input type="text" className={style.frameInput}  value={Addpost}  onChange={addPost}    placeholder='  What’s on your mind?'/>
        </div>
    )
}

export default Frame