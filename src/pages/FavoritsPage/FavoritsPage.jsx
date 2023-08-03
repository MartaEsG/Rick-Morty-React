import { GlobalContext } from "../../App"
import { useContext } from "react"
import Gallery from "../../Gallery/Gallery"

export default function FavoritsPage(){
    const {favorites} = useContext(GlobalContext)
    return <div>
        <Gallery characters= {favorites}/>
        </div>
}