
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharactersDetailPage (){

    const {id} = useParams();

    const [character, setCharacter]= useState([])

    async function getCharacters (){
        try {
             const {data} = await axios (`https://rickandmortyapi.com/api/character/${id}`)
                // console.log(data)
                setCharacter(data)


        } catch (e){
            console.error(e)
        }
            
        }
    useEffect(()=> { 
        getCharacters()
    }, [] )

return (
     <div>
            <h2>Name: {character.name}</h2>
            <img src={character.image} alt={character.name}/>
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            {character.type && <p>Type: {character.type}</p>}
            <p>Gender: {character.gender}</p>
            <Link to={`/characters`}><button>Volver</button> </Link>
    </div>
)


}
