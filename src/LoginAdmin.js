import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
    let navigate = useNavigate();
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [{
        username: "admin",
        password: "1234",
    }, ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                alert("Bienvenue mr l'administrateur :)");
                navigate("/accueiladmin");
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && ( <
            div className = "error" > { errorMessages.message } < /div>
        );

    // JSX code for login form
    return ( <
        div >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "main-box1" >
        <
        div div className = "form-group" >
        <
        div className = "col-md-12 text-center" > { " " } <
        h2 > PAGE D 'AUTHENTIFICATION POUR L'
        ADMINISTRATEUR < /h2>{" "} < /
        div > { " " } <
        /div>{" "} <
        br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Username < /h4> { " " } < /
        div > { " " } <
        div className = "col-md-6" > { " " } <
        input type = "text"
        name = "uname"
        className = "form-control"
        required / > { " " } { renderErrorMessage("uname") } < div / >
        <
        /div>{" "} <
        br / > < br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Password < /h4> { " " } < /
        div > { " " } <
        div className = "col-md-6" > { " " } <
        input type = "password"
        name = "pass"
        className = "form-control"
        required / > { " " } { renderErrorMessage("pass") } < div / >
        <
        /div>{" "} <
        br / >
        <
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
        /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        form > { " " } <
        /div>
    );
};

export default LoginAdmin;