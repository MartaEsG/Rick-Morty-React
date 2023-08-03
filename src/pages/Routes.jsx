import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ContactPage from "./ContactPage/ContactPage";
import { Routes as RoutesDom } from "react-router-dom";
import CharactersDetailPage from "./CharactersDetailsPage/CharactersDetailPage";
import FavoritsPage from "./FavoritsPage/FavoritsPage";

export default function Routes() {
    return <RoutesDom>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element= {<CharactersDetailPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<FavoritsPage/>}/>
        
    </RoutesDom>
}