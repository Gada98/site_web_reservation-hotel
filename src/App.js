import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Header from "./Header";
import Accueil from "./Accueil";
import Contact from "./components/contact";
import Create from "./components/create";
import Update from "./components/update";
import Help from "./Help";

// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import "./gallery.css";
import LoginAdmin from "./LoginAdmin";
import AccueilAdmin from "./AccueilAdmin";
import AddChambre from "./components/AddChambre";
import UpdateChambre from "./components/UpdateChambre";
import ListeChambre from "./components/ListeChambre";

import View from "./components/View";

import Gallery from "./Gallery";

function App() {
    return ( <
        div className = "container" >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/consultechambre"
        element = { < View / > }
        /> <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        Route path = "/login"
        element = { < Login / > }
        />{" "} <
        Route path = "/register"
        element = { < Register / > }
        />{" "} <
        Route path = "/gallery"
        element = { < Gallery / > }
        /> <
        Route path = "/accueil"
        element = { < Accueil / > }
        />{" "} <
        Route path = "/help"
        element = { < Help / > }
        />{" "} <
        Route exact path = "/contact"
        element = { < Contact / > }
        />{" "} <
        Route exact path = "/create"
        element = { < Create / > }
        />{" "} <
        Route exact path = "/update"
        element = { < Update / > }
        />{" "} <
        Route path = "/loginadmin"
        element = { < LoginAdmin / > }
        />{" "} <
        Route path = "/accueiladmin"
        element = { < AccueilAdmin / > }
        />{" "} <
        Route path = "/addchambre"
        element = { < AddChambre / > }
        />{" "} <
        Route path = "/updatechambre/:id"
        element = { < UpdateChambre / > }
        />{" "} <
        Route path = "/listechambre"
        element = { < ListeChambre / > }
        />{" "} < /
        Routes > { " " } <
        /Router>{" "} < /
        div >
    );
}

export default App;