import { Link } from "react-router-dom"

export default function Gallery({characters}){
    return <div>
        {characters.map((item) => <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name}/>
            <Link to={`/characters/${item.id}`}><button>Ver más</button> </Link>
        </div>)}
        
        </div>
}

