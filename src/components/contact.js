/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reservation: [] };
        this.headers = [
            { key: "id", label: "Id" },
            { key: "nom", label: "Nom" },
            { key: "date_arrive", label: "Date_arrivée" },
            { key: "date_depart", label: "Date_depart" },
            { key: "nombre_adulte", label: "Nombre_adulte" },
            { key: "nombre_enfant", label: "Nombre_enfant" },
            { key: "numero_chambre", label: "Numero_chambre" },
        ];

        this.deleteContact = this.deleteContact.bind(this);
    }
    componentDidMount() {
        const url = "http://localhost/exemple/fich.php";
        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
                this.setState({ reservation: data });
                // console.log(this.state.reservation);
            });
    }
    deleteContact(id, event) {
        //alert(id)
        event.preventDefault();
        if (window.confirm("Are you sure want to delete?")) {
            axios({
                    method: "post",
                    url: "http://localhost/exemple/fich.php/?delete=" + id,
                })
                .then(function(response) {
                    //handle success
                    console.log(response);
                    if (response.status === 200) {
                        alert("Website deleted successfully");
                    }
                })
                .catch(function(response) {
                    // handle error
                    // console.log(response);
                });
        }
    }
    render() {
        return ( <
            div className = "container" > { " " } <
            h2 > LISTE DES RESERVATIONS < /h2>{" "}  <
            div className = "main-box1" >
            <
            table className = "table table-bordered table-striped" >
            <
            thead >
            <
            tr > { " " } {
                this.headers.map(function(h) {
                    return <th key = { h.key } > { h.label } < /th>;
                })
            } { " " } <
            th > Actions < /th>{" "} < /
            tr > { " " } <
            /thead>{" "} <
            tbody > { " " } {
                this.state.reservation.map(
                    function(item, key) {
                        return ( <
                            tr key = { key } > <
                            td > { item.id } < /td>  <
                            td > { item.nom } < /td > { " " } <
                            td > { item.date_arrive } < /td> <
                            td > { item.date_depart } < /td >  <
                            td > { item.nombre_adulte } < /td>{" "} <
                            td > { item.nombre_enfant } < /td>{" "}  <
                            td > { item.numero_chambre } < /td>{" "} <
                            td > <
                            Link to = { '/update/' }
                            className = "btn btn-primary btn-xs" > { " " }
                            Modifier { " " } <
                            /Link> <
                            Link to = "#"
                            onClick = { this.deleteContact.bind(this, item.id) }
                            className = "btn btn-danger btn-xs" > { " " }
                            Anuuler { " " } <
                            /Link>{" "} < /
                            td > <
                            /tr>
                        );
                    }.bind(this)
                )
            } { " " } <
            /tbody>{" "} < /
            table > { " " } < / 
            div >
            <
            /div>
        );
    }
}

export default Contact;