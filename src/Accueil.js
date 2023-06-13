/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unreachable */
//import {useHistory} from "react-router-dom";
import { Component } from "react";
import { Link } from "react-router-dom";
/* eslint-disable no-undef */
class Accueil extends Component {
    faireRedirection = () => {
        let navigate = useNavigate();
        navigate("/add");
        // history = useHistory(),
        // history.push(url),



    };

    render() {
        return ( <
            div className = "container-first" >
            <
            div className = "lignes" >
            <
            div className = "l1" > < /div> <div className ="l2"> </div >
            <
            /div>{" "} <
            br / >
            <
            br / >
            <
            h2 > PAGE D 'ACCUEIL </h2> <br />{" "} <
            h3 > S 'il vous plait cliquer sur le service demandé</h3> <br />{" "} <
            div className = "row" >

            <
            ul > { " " } <
            li >
            <
            Link to = "/consultechambre" > { " " } <
            h5 > CONSULTER LA LISTE DES CHAMBRE < /h5> < /
            Link > <
            /li>{" "} < /
            ul > { " " }



            { " " } <
            br / > <
            ul > { " " } <
            li > { " " } <
            Link to = "/contact" > { " " } <
            h5 > MODIFIER OU ANNULER LA RESERVATION < /h5> < /
            Link > { " " } <
            /li> < /
            ul > { " " } <
            br / >
            <
            ul > { " " } <
            li >
            <
            Link to = "/help" > { " " } <
            h5 > ENVOYER UNE RECLAMATION < /h5> < /
            Link > <
            /li> < /
            ul > <
            /div>{" "} < /
            div >
        );
    }
}
export default Accueil;