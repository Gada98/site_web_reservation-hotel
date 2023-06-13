import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class ListeChambre extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reservation: [] };
        this.headers = [
            { key: "id", label: "Id" },
            { key: "numero_chambre", label: "Numero_chambre" },
            { key: "etage", label: "Etage" },
            { key: "type_chambre", label: "Type_chambre" },
            { key: "tarif", label: "Tarif" },
        ];

        this.deleteContact = this.deleteContact.bind(this);
    }
    componentDidMount() {
        const url = "http://localhost/exemple/gestionChambre.php";
        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
                this.setState({ reservation: data });
                console.log(this.state.reservation);
            });
    }
    deleteContact(id, event) {
        //alert(id)
        event.preventDefault();
        if (window.confirm("Are you sure want to delete?")) {
            axios({
                    method: "post",
                    url: "http://localhost/exemple/gestionChambre.php/?delete=" + id,
                })
                .then(function(response) {
                    //handle success
                    console.log(response);
                    if (response.status === 200) {
                        alert("Website deleted successfully");
                    }
                })
                .catch(function(response) {
                    //handle error
                    console.log(response);
                });
        }
    }
    render() {
        return ( <
            div className = "container" > { " " } <
            h2 > LISTE DES CHAMBRES < /h2>{" "} <
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
                            tr key = { key } >
                            <
                            td > { item.id } < /td> <td> {item.numero_chambre} </td > { " " } <
                            td > { item.etage } < /td> <td> {item.type_chambre} </td > { " " } <
                            td > { item.tarif } < /td>{" "} <
                            td >
                            <
                            Link to = { `/updatechambre/${item.id}` }
                            className = "btn btn-primary btn-xs" > { " " }
                            Modifier { " " } <
                            /Link> <
                            Link to = "#"
                            onClick = { this.deleteContact.bind(this, item.id) }
                            className = "btn btn-danger btn-xs" > { " " }
                            Supprimer { " " } <
                            /Link>{" "} < /
                            td > { " " } <
                            /tr>
                        );
                    }.bind(this)
                )
            } { " " } <
            /tbody>{" "} < /
            table > { " " } <
            /div> < /
            div >
        );
    }
}

export default ListeChambre;