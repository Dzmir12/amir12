
import style from "./Search.module.css"
import searchicon from './../../assets/icons8-searchd.gif'
import searchi from './../../assets/icons8-search-48.png'

function Search({search,setSearch}) {

  return (

    <div className={style.inputContainer}>
    <input type="text"placeholder="Enter your city" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    <img src={searchicon} className={`${search.length >=1 ?'':style.icon} ${style.image}`} />
    <img src={searchi} className={`${search.length ===0 ?'':style.icon} ${style.image}`}  />
    </div>
  )
}

export default Search

