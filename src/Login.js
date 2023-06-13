import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };
    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password,
        };
        //console.log(sendData);
        axios.post("http://localhost/exemple/Authentification.php", sendData)
            .then((result) => {
                if (result.data.Status === "200") {
                    //window.localStorage.setItem("email", result.data.email);
                    //window.localStorage.setItem("userName", result.data.first_name + " " + result.data.last_name);
                    alert("invalid User");
                    //navigate("/accueil");
                }
            })
            .catch((result) => {
                navigate("/accueil");
                alert("valid user");
            });

    };

    return ( <
        div >
        <
        form onSubmit = { submitForm } >
        <
        div className = "main-box1" >
        <
        div className = "form-group" >
        <
        div className = "col-md-12 text-center" > { " " } <
        h2 > PAGE D 'AUTHENTIFICATION </h2>{" "} < /
        div > { " " } <
        /div>{" "} <
        br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Email < /h4>{" "} < /
        div > { " " } <
        div className = "col-md-6" >
        <
        input className = "form-control"
        type = "email"
        name = "email"
        onChange = { handleChange }
        value = { user.email }
        />{" "} < /
        div > { " " } <
        /div>{" "} <
        br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Mot de passe < /h4>{" "} < /
        div > { " " } <
        div className = "col-md-6" >
        <
        input className = "form-control"
        type = "password"
        name = "password"
        onChange = { handleChange }
        value = { user.password }
        />{" "} < /
        div > { " " } <
        /div>{" "} <
        br / > < br / > { " " } <
        div className = "row" >
        <
        div className = "col-md-12 text-center" >
        <
        input type = "submit"
        name = "submit"
        className = "btn-success"
        value = "LOGIN" /
        >
        <
        /div>{" "} < /
        div > { " " } <
        br / >
        <
        div className = "row" >
        <
        h6 >
        <
        a href = "Mot de passe oublié ?" > Mot de passe oublié ? < /a> { " " } < /
        h6 > { " " } < /
        div > { " " } <
        /div>{" "} < /
        form > { " " } <
        /div>
    );
};
export default Login;