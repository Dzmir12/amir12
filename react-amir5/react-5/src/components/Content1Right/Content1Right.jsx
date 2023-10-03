import style from './Content1Right.module.css'
import burgersandwich from './../../assets/burgersandwich.png'
import button1 from './../../assets/button1.png'
import button2 from './../../assets/button2.png'
import ComboJunkFood from './../../assets/ComboJunkFood.png'
import pizza from './../../assets/pizza.png'
import Cake from './../../assets/cake.png'

const foodlist = [{ img: burgersandwich, title: "Burger", description: "Mushroom Sauce", price: '5.15' }
                , { img: ComboJunkFood, title: "Food Combo", description: "Mushroom Sauce", price: '9.15' },
                  { img: pizza , title: "Pizza", description: "Mushroom Sauce", price: '6.15' },
                  { img:Cake , title: "Cake", description: "Mushroom Sauce", price: '5.15' }]




function Content1Right() {
    return (
        <div className={style.content1Right}>
            <div className={style.contentRightContainer}>

              {foodlist.map((item,i)=>{
                  return(<div className={style.contentRightItemContainer} key={i}>
                    <img src={item.img} className={style.ItemContainerImage} />
                    <h4 className={style.ItemContainerH4}>{item.title}</h4>
                    <p className={style.ItemContainerP}>{item.description}</p>
                    <div className={style.ItemPriceContainer}>
                        <span className={style.red}>$</span>
                        <p className={style.ItemPrice}>{item.price}</p>
                    </div>

                    <div className={style.ItemButtonContainer}>
                        <img src={button1} />
                        <img src={button2} />
                    </div>

                </div>)
              })}

              

            </div>
        </div>
    )
}

export default Content1Right