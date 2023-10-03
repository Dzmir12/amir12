
import style from './ResturantUtilities.module.css'
import cirlce2 from './../../assets/circle2.png'
import Food from './../../assets/Food.png'
import food2 from './../../assets/food2.png'
import delivery from './../../assets/delivery.png'
import './ResturantUtilities.css'


const  ResturantUtilitiesitem=[{img:Food,name:'Qualityfull Food',description:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."},
                               {img:food2,name:'Healthy Food',description:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."},
                               {img:delivery,name:'Fast Delivery',description:"But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."}
]


function ResturantUtilities() {
    return (
        <div className={style.resturantUtilities}>

             {ResturantUtilitiesitem.map((item,i)=>{
                return( <div className={`${style.resturantUtilitiesContainer} ${i === 1 ? "" : "Border"}`} key={i}>
                    <div className={style.resturantUtilitiesiconContainer}>
                        <img src={cirlce2}  className={style.resturantUtilitiesImgContainer} />
                        <img src={item.img}   className={style.resturantUtilitiesicon}/>
                    </div>
                    <h4 className={style.resturantUtilitiesH4}>{item.name}</h4>
                    <p  className={style.resturantUtilitiesP}>{item.description}</p>
                </div>)
             })}

            

        
        </div>
    )
}

export default ResturantUtilities