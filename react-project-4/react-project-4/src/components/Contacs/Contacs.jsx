import style from "./Contacs.module.css"
import profile2 from './../../assets/profile2.png'
function Contacs() {
    
    return (
        <div className={style.contacs}>

        <div className={style.contacsPContainer}>
            <p className={style.contacsP}>Contacts</p>
        </div>

        <div className={style.FriendList}>
            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>

            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>

            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>

            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>

            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>

            <div className={style.FriendListContainer}>
                <img src={ profile2 } />
                <p className={style.FriendListP}>Bessie Cooper</p>
            </div>
        </div>

        <p className={style.contacs2P}>View all</p>

        </div>
    )
}

export default Contacs