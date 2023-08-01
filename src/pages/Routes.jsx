import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ContactPage from "./ContactPage/ContactPage";
import { Routes as RoutesDom } from "react-router-dom";

export default function Routes() {
    return <RoutesDom>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </RoutesDom>
}