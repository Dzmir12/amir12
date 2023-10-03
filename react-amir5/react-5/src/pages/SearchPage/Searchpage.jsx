import { useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import PopularItem from "../../components/PopularItem/PopularItem"
import ResturantAdervertising from "../../components/ResturantAdevertising/ResturantAdervertising"
import ResturantInfo from "../../components/ResturantInfo/ResturantInfo"
import gyrosandwich1 from './../../assets/gyrosandwich1.png'
import lazania from './../../assets/lazania.png'
import beans from './../../assets/beans.png'
import pizzam from './../../assets/pizzam.png'
import chickenp from './../../assets/chickenp.png'
import salad from './../../assets/salad.png'
import btnicon from './../../assets/btnicon.png'
import star from './../../assets/star.png'
import style from './Searchpage.module.css'
const PopularItemfood = [{ img: gyrosandwich1, name: "Gyro Sandwhic", rate: '4.9', price: "$15.00" },
{ img: lazania, name: "Enchilade", rate: '5.0', price: "$25.50" },
{ img: beans, name: "Green Beans", rate: '4.9', price: "$12.00" },
{ img: pizzam, name: "Pizza", rate: '5.0', price: "$18.50" },
{ img: chickenp, name: "Chicken Pot Pie", rate: '4.9', price: "$25.00" },
{ img: salad, name: "Green Salad", rate: '4.9', price: "$15.00" }]


function SearchPage() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    const filtered = PopularItemfood.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filtered;
  };

  return (
    <div className={style.SearchPage}>
      <Header stateProp={searchInput} setStateProp={setSearchInput} />


      <div className={style.popularItem}>

        {handleSearch().map((item, i) => {
          return (<div className={style.popularItemContainer} key={i}>
            <img src={item.img} className={style.popularItemImg} />
            <div className={style.popularItemPContainer}>
              <h4 className={style.popularItemH4}>{item.name}</h4>
              <div className={style.popularItemSecondPContainer}>
                <div className={style.popularItemRate}>
                  <img src={star} />
                  <p className={style.popularItemRateP}>{item.rate}</p>
                </div>
                <p className={style.popularItemRate2P}>{item.price}</p>
              </div>
            </div>
            <button className={style.popularItemBtn}>Add To Cart</button>
          </div>)
        })}

        {/* <div className={style.popularItem2Btn}>
          <button className={`${style.popularItemBtn} ${style.custombtn}`}>See More Product</button>
          <img src={btnicon} className={style.popularItem2BtnIcon} />
        </div> */}


      </div>


      <ResturantInfo />
      <ResturantAdervertising />
      <Footer />
    </div>
  )
}

export default SearchPage