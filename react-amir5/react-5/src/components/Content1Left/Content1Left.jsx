import style from './Content1Left.module.css'
import bikedelivery from './../../assets/BikeDelivery.png'
import PlayButton from './../../assets/PlayButton.png'


function Content1Left() {
  return (
    <div className={style.Content1Left}>
           <img src={bikedelivery} />
           <p className={style.Content1LeftP}>The Fastest Delivery In  <span className={style.Orange}>Your City</span></p>
           <p className={style.Content1LeftSecondP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum. </p>
           <div className={style.ContentLeftButtonContainer}>
               <button className={style.ContentLeftButton}>Order Now</button>
               <div className={style.playButtonContainer}>
                <img src={PlayButton} className={style.playButtonIcon}/>
                <p className={style.playButtonP}>Order Process</p>
               </div>
           </div>
    </div>
  )
}

export default Content1Left