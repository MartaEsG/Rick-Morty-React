import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Gallery from "../../Gallery/Gallery";
import Pagination from "../../Pagination/Pagination";


export default function CharactersPage(){

const [characters, setCharacters] = useState([]);

                
    useEffect(()=> {
        async function getCharacters (){
        try {
             const {data} = await axios ("https://rickandmortyapi.com/api/character")
                // console.log(data.results)
                setCharacters(data.results)

        } catch (e){
            console.error(e)
        }
            
        }
        getCharacters()
    }, [])
    return <div>
        <Pagination></Pagination>
        <Gallery characters={characters}/>   
        </div>
}