import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../App"



export default function Gallery({characters}){

    const {favorites, setFavorites} = useContext(GlobalContext)

    function addFav(item){
       setFavorites([...favorites, item])
            
    }
    return <div>
        {characters.map((item) => <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <Link to={`/characters/${item.id}`}><button>Ver más</button> </Link>
            <button onClick={()=>addFav(item)}>Añadir a favoritos</button>
        </div>)}
        
        </div>
}

