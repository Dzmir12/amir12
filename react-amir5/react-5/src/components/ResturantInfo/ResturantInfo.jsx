import style from './ResturantInfo.module.css'
import circle from './../../assets/circle.png'
import time from './../../assets/time.png'
import location from './../../assets/location.png'
import phone from './../../assets/phone.png'
import './ResturantInfo.css'

const ResturantInfolist=[{img:time,title:"Today 10:00am - 10:00pm",subtitle:"Working time"},
                         {img:location,title:"Washington, D.C., DC,USA",subtitle:"Our Location"},
                         {img:phone,title:"+0123 456 7891",subtitle:"Phone Number"}]


function ResturantInfo() {
  return (
    <div className={style.resturantInfo}>

        {ResturantInfolist.map((item,i)=>{
             return (    <div className={`${style.resturantInfoContainer} ${i === 0 ? "" : "withBorder"}`} key={i}>
               
                <div>
                 <img src={circle } className={style.resturantInfoimgContainer} />
                 <img src={item.img} className={style.resturantInfoimg} />
                </div>
                <h5 className={style.resturantInfoH5}>{item.title}</h5>
                <p className={style.resturantInfoP}>{item.subtitle}</p>
           </div>)
        })}


         

          

          

          
    </div>
  )
}

export default ResturantInfo