/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function Contact() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getUser();
    }, []);


    function getUser() {
        axios.get("http://localhost/exemple/edit.php/${id}")
            .then(function(response) {
                //console.log(response.data);
                setInputs(response.data);
            });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value }));
    };
    const handleSubmit = (event) => {
        //event.preventDefault();
        axios.put("http://localhost/exemple/edit.php", inputs)
            .then(function(response) {
                console.log(response.data);
                navigate("/");
            });
    };
    return ( <
        div className = "main-box2" >
        <
        div className = "container" >
        <
        h2 > MODIFIER D 'UNE RESERVATION < /h2>{" "} <
        div className = "col-md-12" >
        <
        div className = "panel panel-primary" >
        <
        div className = "panel-body" >
        <
        form onSubmit = { handleSubmit } >
        <
        input type = "hidden"
        name = "id"
        value = { inputs.id }
        />{" "} <
        label > Nom <
        input type = "text"
        name = "name"
        className = "form-control"
        value = { inputs.name }
        onChange = { handleChange }
        />{" "}  <
        label > Date d 'arrivée </label>{" "} <
        input type = "date"
        name = "arrive"
        className = "form-control"
        value = { inputs.arrive }
        onChange = { handleChange }
        />{" "}</label > { " " } <
        label > Date de départ <
        input type = "date"
        name = "depart"
        className = "form-control"
        value = { inputs.depart }
        onChange = { handleChange }
        />{" "}</label > { " " } <
        label > Nombre des adultes <
        input type = "number"
        name = "adulte"
        className = "form-control"
        value = { inputs.adulte }
        onChange = { handleChange }
        />{" "}</label > { " " } <
        label > Nombre des enfants <
        input type = "number"
        name = "enfant"
        className = "form-control"
        value = { inputs.enfant }
        onChange = { handleChange }
        />{" "}</label > { " " }

        <
        label > Numero de chambre <
        input type = "text"
        name = "numero_chambre"
        className = "form-control"
        value = { inputs.numero_chambre }
        onChange = { handleChange }
        />{" "}</label >

        <
        br / >
        <
        input type = "submit"
        className = "btn1 btn-primary btn-block"
        value = "modifier" /
        >
        <
        /form>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } < /
        div >
        <
        /div>
    );
}