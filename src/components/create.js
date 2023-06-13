import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            arrive: '',
            depart: '',
            adulte: '',
            enfant: '',
            numero_chambre: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('arrive', this.state.arrive)
        formData.append('depart', this.state.depart)
        formData.append('adulte', this.state.adulte)
        formData.append('enfant', this.state.enfant)
        formData.append('numero_chambre', this.state.numero_chambre)

        axios({
                method: 'post',
                url: 'http://localhost/exemple/fich.php',
                data: formData,
                config: { headers: { 'Content-Type': 'multipart/form-data' } }
            })
            .then(function(response) {
                //handle success
                console.log(response)
                alert('New Contact Successfully Added.');
            })
            .catch(

                function(response) {
                    //handle error
                    console.log(response)
                });

    }
    render() {
        return ( <
            div className = "main-box2" >
            <
            div className = "container" >
            <
            h2 > RESERVATION D 'UNE CHAMBRE </h2>  <
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
            /> <
            label > Nom < /label> <
            input type = "text"
            name = "name"
            className = "form-control"
            value = { this.state.name }
            onChange = { this.handleChange }
            />

            <
            label > Date d 'arrivée < /label> <
            input type = "date"
            name = "arrive"
            className = "form-control"
            value = { this.state.arrive }
            onChange = { this.handleChange }
            />

            <
            label > Date de départ < /label> <
            input type = "date"
            name = "depart"
            className = "form-control"
            value = { this.state.depart }
            onChange = { this.handleChange }
            />

            <
            label > Nombre des adultes < /label> <
            input type = "number"
            name = "adulte"
            className = "form-control"
            value = { this.state.adulte }
            onChange = { this.handleChange }
            />

            <
            label > Nombre des enfants < /label> <
            input type = "number"
            name = "enfant"
            className = "form-control"
            value = { this.state.enfant }
            onChange = { this.handleChange }
            /> <
            label > Numéro de chambre < /label> <
            input type = "text"
            name = "numero_chambre"
            className = "form-control"
            value = { this.state.numero_chambre }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            input type = "submit"
            className = "btn1 btn-primary btn-block"
            value = "Réserver" / >
            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div >
        );
    }
}

export default Create;