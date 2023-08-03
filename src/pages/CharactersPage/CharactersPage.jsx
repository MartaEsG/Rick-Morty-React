import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Gallery from "../../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";
import SearchForm from "../SearchForm/SearchForm";

export default function CharactersPage(){

const [characters, setCharacters] = useState([]);

const [page, setPage]=useState(1)

async function getCharacters (){
    try {
         const {data} = await axios (`https://rickandmortyapi.com/api/character?page=${page}`)
            // console.log(data.results)
            setCharacters(data.results)

    } catch (e){
        console.error(e)
    }
        
    }
                
    useEffect(()=> {
        
        getCharacters()
    }, [page])

const [filter, setFilter]=useState()

    async function filterCharacters (){
        try {
             const {data} = await axios ("https://rickandmortyapi.com/api/character?page=" +page + "&name=" + filter)
                // console.log(data.results)
                setCharacters(data.results)
    
        } catch (e){
            console.error(e)
        }
            
        }
                    
        useEffect(()=> {
            
            filterCharacters()
        }, [filter])
    return <div>
        <SearchForm filter={filter} setFilter={setFilter}/>
        <Pagination page={page} setPage={setPage}></Pagination>
        <Gallery characters={characters}/>

         
        </div>
}