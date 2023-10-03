import style from './ClientOpenion.module.css'
import client from './../../assets/client.png'
import arrowl from './../../assets/arrowl.png'
import arrowR from './../../assets/arrowR.png'
import berger from './../../assets/berger.png'


function ClientOpenion() {
    return (
        <div className={style.clientOpenion}>
            <div className={style.clientOpenionLeft}>
                <div className={style.clientOpenionContainer}>

                    <div  className={style.clientOpenionContainer1}>
                        <img src={client} />

                        <div className={style.clientOpenionPContainer}>
                            <h5 className={style.clientOpenionH5}>Willians Jhone</h5>
                            <p className={style.clientOpenionP}>CEO & Co-Founder</p>
                        </div>
                    </div>
                    <p className={style.clientOpenion2P}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”</p>

                    <img src={arrowl} className={style.arrowl}/>
                    <img src={arrowR}  className={style.arrowR}/>
                </div>

                

            </div>


            <div className={style.clientOpenionimg}>
                <img src={berger} className={style.clientOpenionberger}/>
            </div>
        </div>
    )
}

export default ClientOpenion