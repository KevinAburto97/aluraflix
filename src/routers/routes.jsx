import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Page404 from "../pages/Page404";
import Watch from "../pages/Watch";
import Peliculas from "../pages/Peliculas";
const MyRoutes = () => {
    return(
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/watch/:id" element={<Watch/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/peliculas" element={<Peliculas/>}/>
                <Route path="/peliculas/genre/:genre" element={<Peliculas/>}/>
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </Router>
    );
}

export default MyRoutes;