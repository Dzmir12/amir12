import style from './Search.module.css'
import shopingBox from './../../assets/shopingBox.png'
import searchicon from './../../assets/searchicon.png'





function Search(props) {
    
    return(
        <div className={style.search}>
           <img src={searchicon} className={style.searchicon} />
          <input type="text"  className={style.input}  value={props.stateProp}  onChange={(e) => props.setStateProp(e.target.value)}/>
          <div className={style.shopingBox}><img src={shopingBox} className={style.shopingBoximg} /></div>
        </div>
    )
}

export default Search