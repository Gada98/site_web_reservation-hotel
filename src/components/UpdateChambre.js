import React from "react";
//import { Link } from "react-router-dom";
import axios from "axios";


class UpdateChambre extends React.Component {
    state = { chambre: [] };

    componentDidMount() {
        axios.get('http://localhost/exemple/gestionChambre.php').then((res) => {
            const chambre = res.data;
            this.setState({ chambre });
        });
    }

    render() {
        return ( <
            div className = "main-box2" >
            <
            div className = "container" >
            <
            h2 > MODIFIER D 'UNE CHAMBRE < /h2>{" "}  <
            div className = "col-md-12" >
            <
            div className = "panel panel-primary" >
            <
            div className = "panel-body" >
            <
            form onSubmit = { this.handleSubmit } >
            <
            input type = "hidden"
            name = "id"
            value = { this.state.id }
            />{" "} <
            label > Numero_chambre < /label>{" "} <
            input type = "number"
            name = "numero_chambre"
            className = "form-control"
            value = { this.state.numero_chambre }
            onChange = { this.handleChange }
            />{" "} <
            label > Etage < /label>{" "} <
            input type = "text"
            name = "etage"
            className = "form-control"
            value = { this.state.etage }
            onChange = { this.handleChange }
            />{" "} <
            label > Type_chambre <
            div >
            <
            input onChange = { this.handleChange }
            type = "radio"
            value = "single"
            name = "type_chambre" /
            >
            Single { " " } <
            input onChange = { this.handleChange }
            type = "radio"
            value = "double"
            name = "type_chambre" /
            >
            Double { " " } <
            /div> < /
            label > { " " } <
            br / >
            <
            label > Tarif < /label>{" "} <
            input type = "text"
            name = "tarif"
            className = "form-control"
            value = { this.state.tarif }
            onChange = { this.handleChange }
            />{" "} <
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
            div > { " " } < /div  > < /
            div >
        );
    }
}
export default UpdateChambre;