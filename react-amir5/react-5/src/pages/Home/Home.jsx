import Header from "../../components/Header/Header"
import style from './Home.module.css';
import Footer from "../../components/Footer/Footer";
import Content1Left from "../../components/Content1Left/Content1Left";
import Abstract from './../../assets/Abstract.png';
import Content1Right from "../../components/Content1Right/Content1Right";
import ResturantInfo from "../../components/ResturantInfo/ResturantInfo";
import PopularItem from "../../components/PopularItem/PopularItem";
import ResturantUtilities from "../../components/ResturantUtilities/ResturantUtilities";
import ClientOpenion from "../../components/ClientOpenion/ClientOpenion";
import ResturantAdervertising from "../../components/ResturantAdevertising/ResturantAdervertising";


function Home() {
  return (
    <div className={style.Home}>
      <Header />

      <div className={style.content}>
        <div className={style.content1}>
          <Content1Left />
          <img src={Abstract} className={style.content1Img} />
          <Content1Right />
        </div>
        <ResturantInfo />

        <div className={style.content2}>
          <p className={style.content2SubTitle} >Product</p>
          <p className={style.content2Title}>Most Popular Items</p>
          <PopularItem />
        </div>

        <div className={style.content2}>
          <p className={style.content2SubTitle} >Services</p>
          <p className={style.content2Title}>Why Choose Our Favorite Food</p>
          <ResturantUtilities />
        </div>

        <div className={style.content2}>
          <p className={style.content2SubTitle} >Testimonials</p>
          <p className={style.content2Title}>Our Happy Client Says</p>
          <ClientOpenion />
        </div>

        <div className={style.content2}>
          <ResturantAdervertising />
        </div>

        

      </div>


      <Footer />
    </div>
  )
}

export default Home