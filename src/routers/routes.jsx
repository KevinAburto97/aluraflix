import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Page404 from "../pages/Page404";
import Watch from "../pages/Watch";
const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/watch/:id" element={<Watch/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="*" element={<Page404 />}/>
            </Routes>
        </Router>
    );
}

export default MyRoutes;