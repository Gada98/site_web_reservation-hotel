/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            national: "",
            cin: "",
            phone: "",
            adresse: "",
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("first_name", this.state.first_name);
        formData.append("last_name", this.state.last_name);
        formData.append("national", this.state.national);
        formData.append("cin", this.state.cin);
        formData.append("phone", this.state.phone);
        formData.append("adresse", this.state.adresse);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        axios({
                method: "post",
                url: "http://localhost/exemple/inscrir.php",
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } },
            })
            .then(function(response) {
                //handle success
                console.log(response);
                alert("New Contact Successfully Added.");
            })
            .catch(function(response) {
                //handle error
                // console.log(response);
            });
    }
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            div className = "main-box1" >
            <
            div className = "row" >
            <
            div className = "col-md-12 text-center" >
            <
            h2 > PAGE D 'INSCRIPTION </h2>{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            h4 > Nom < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "first_name"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.first_name }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Prénom < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "last_name"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.last_name }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Nationalité < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "national"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.national }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > N_CIN < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "cin"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.cin }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > N_téléphone < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "phone"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.phone }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Adresse < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "text"
            name = "adresse"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.adresse }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Email < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "email"
            name = "email"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.email }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-6" > { " " } <
            h4 > Mot de passe < /h4>{" "} < /
            div > { " " } <
            div className = "col-md-6" >
            <
            input type = "password"
            name = "password"
            className = "form-control"
            onChange = { this.handleChange }
            value = { this.state.password }
            />{" "} < /
            div > { " " } <
            /div>{" "} <
            br / >
            <
            div className = "row" >
            <
            div className = "col-md-12 text-center" >
            <
            input type = "submit"
            name = "submit"
            value = "REGISTER"
            className = "btn-success" /
            >
            <
            /div>{" "} < /
            div > { " " } <
            /div>{" "} < /
            form > { " " } <
            /div>
        );
    }
}
export default Register;