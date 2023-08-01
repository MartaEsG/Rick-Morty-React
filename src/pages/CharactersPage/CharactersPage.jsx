import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Gallery from "../../Gallery/Gallery";
import Pagination from "../../Pagination/Pagination";


export default function CharactersPage(){

const [characters, setCharacters] = useState([]);

const [page, setPage]=useState(1)
                
    useEffect(()=> {
        async function getCharacters (){
        try {
             const {data} = await axios (`https://rickandmortyapi.com/api/character?page=${page}`)
                // console.log(data.results)
                setCharacters(data.results)

        } catch (e){
            console.error(e)
        }
            
        }
        getCharacters()
    }, [page])
    return <div>
        <Pagination page={page} setPage={setPage}></Pagination>
        <Gallery characters={characters}/>
         
        </div>
}