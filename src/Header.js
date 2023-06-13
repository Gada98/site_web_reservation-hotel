/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
const Header = () => {
    const [auth, setAuth] = useState("");
    const [user, setUser] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
        //console.log(auth)
        var auth = localStorage.getItem("email");
        var userName = localStorage.getItem("userName");

        setAuth(auth);
        setUser(userName);
    });
    return ( <
        nav className = "navbar navbar-expand-lg navbar-light bg-light" >
        <
        div className = "container-fluid" >
        <
        a className = "navbar-brand"
        href = "#" > { " " } <
        p > { " " } <
        font size = "5"
        face = "fantasy"
        color = "blue" > { " " }
        MyHotel { " " } <
        /font>{" "} <
        /p>{" "} <
        /a>{" "} <
        div className = "collapse navbar-collapse"
        id = "navbarText" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        Link to = "/"
        className = "nav-link active" >
        Home { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/register"
        className = "nav-link active" >
        Register { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/login"
        className = "nav-link active" >
        Login { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/Gallery"
        className = "nav-link active" >
        Gallery { " " } <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        span className = "navbar-text" > Welcome { user } < /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        /nav>
    );
};
export default Header;