
const link=[{name:'Home', link:"./home"},{name:'Menu', link:"./menu"},{name:'Service', link:"./service"},{name:'Shope', link:"./shop"}]
import logo from './../../assets/logo.png'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'



function Header(props) {

   

     return(
        <div className={style.header}>
         <img src={logo}/>
         <nav className={style.nav}>
            {link.map((nav,i)=>{
               return(<Link key={i} to={nav.link} className={style.nav}>{nav.name}</Link>) 
            })}
         </nav>

         <Link to='/search'> <Search stateProp={props.stateProp} setStateProp={props.setStateProp}/> </Link>  

        </div>
     )
}

export default Header