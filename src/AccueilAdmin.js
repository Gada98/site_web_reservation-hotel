import { Link } from "react-router-dom";
const AccueilAdmin = () => {
    return ( <
        div className = "container-first" >
        <
        div className = "lignes" >
        <
        div className = "l1" > < /div> <div className="l2"> </div >
        <
        /div>{" "} <
        br / >

        <
        br / >

        <
        h2 > PAGE D 'ACCUEIL POUR L'
        ADMINISTRATEUR < /h2> <br / > { " " } <
        div className = "row" >
        <
        ul > { " " } <
        li >
        <
        Link to = "/contact" > { " " } <
        h5 > CONSULTER LA LISTE DES RESERVATIONS < /h5>{" "} < /
        Link > { " " } <
        /li>{" "} < /
        ul > { " " } <
        br / >

        <
        ul > { " " } <
        li >
        <
        Link to = "/addchambre" > { " " } <
        h5 > AJOUTER UNE CHAMBRE < /h5>{" "} < /
        Link > { " " } <
        /li>{" "} < /
        ul > { " " } <
        ul >
        <
        li >
        <
        Link to = "/listechambre" > { " " } <
        h5 > CONSULTER LALLISTE DES CHAMBRES < /h5>{" "} < /
        Link > { " " } <
        /li>{" "} < /
        ul > { " " } < /
        div > { " " } < /
        div >
    );
};
export default AccueilAdmin;