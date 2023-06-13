import React from "react";

import axios from "axios";
class AddChambre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            arrive: "",
            type_chambre: "",
            adulte: "",
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
        formData.append("name", this.state.name);
        formData.append("arrive", this.state.arrive);
        formData.append("type_chambre", this.state.type_chambre);
        formData.append("adulte", this.state.adulte);

        axios({
                method: "post",
                url: "http://localhost/exemple/gestionChambre.php",
                data: formData,
                config: { headers: { "Content-Type": "multipart/form-data" } },
            })
            .then(function(response) {
                //handle success
                console.log(response);
                alert("New reservation Successfully Added.");
            })
            .catch(function(response) {
                //handle error
                console.log(response);
            });
    }
    render() {
        return ( <
            div className = "main-box2" >
            <
            div className = "container" >
            <
            h2 > AJOUTER UNE CHAMBRE < /h2>{" "} <
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
            label > Numéro d 'une chambre</label>{" "} <
            input type = "number"
            name = "name"
            className = "form-control"
            value = { this.state.name }
            onChange = { this.handleChange }
            />{" "} <
            label > L 'étage</label>{" "} <
            input type = "text"
            name = "arrive"
            className = "form-control"
            value = { this.state.arrive }
            onChange = { this.handleChange }
            />{" "} <
            label > { " " }
            Type d 'une chambre{" "} <
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
            label > Tarif d 'une chambre</label>{" "} <
            input type = "text"
            name = "adulte"
            className = "form-control"
            value = { this.state.adulte }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            input type = "submit"
            className = "btn1 btn-primary btn-block"
            value = "Ajouter" /
            >
            <
            /form>{" "} < /
            div > { " " } <
            /div>{" "} < /
            div > { " " } < / div  > < /
            div >
        );
    }
}

export default AddChambre;