import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ContactPage from "./ContactPage/ContactPage";
import { Routes as RoutesDom } from "react-router-dom";
import CharactersDetailPage from "./CharactersDetailsPage/CharactersDetailPage";

export default function Routes() {
    return <RoutesDom>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element= {<CharactersDetailPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        
    </RoutesDom>
}