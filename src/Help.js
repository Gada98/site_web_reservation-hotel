/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
const Help = () => {
    function sendMail() {
        if (document.getElementById("edTo").value.length === 0) {
            alert("Saisir l'adresse du destinataire !!!");
            return;
        }
        if (document.getElementById("edSubject").value.length === 0) {
            alert("Saisir le titre !!!");
            return;
        }
        if (document.getElementById("edBody").value.length === 0) {
            alert("Ecrire le message !!!");
            return;
        }
        var url = "mailto:" + encodeURIComponent(document.getElementById("edTo").value) + "?subject=" +
            encodeURIComponent(document.getElementById("edSubject").value) + "&body=" +
            encodeURIComponent(document.getElementById("edBody").value);
        document.location = url;
        alert("message envoyé");
    }
    return ( <
        form method = ""
        action = "sendMail()" >
        <
        div >
        <
        div className = "main-box3" >
        <
        div className = "form-group" >
        <
        div className = "col-md-12 text-center" >
        <
        h2 > PAGE D 'UNE RECLAMATION < /h2> <br / > <
        h5 > Cher visiteur, si vous aves un question ou une reclamation, s 'il vous plait envoyer un message sur l '
        email. < /h5><br / >
        <
        /div> < /
        div > < br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Destinataire: < /h4> < /
        div > <
        div className = "col-md-6" >
        <
        input className = "form-control"
        type = "email"
        id = "edTo" / >
        <
        /div> < /
        div > < br / >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        h4 > Sujet: < /h4> < /
        div > { " " } <
        div className = "col-md-6" >
        <
        input className = "form-control"
        id = "edSubject" / > { " " } <
        /div>{" "} < /
        div > { " " } <
        br / > { " " } <
        div className = "row" > { " " } <
        div className = "col-md-6" > { " " } <
        h4 > Message: < /h4>{" "} < /
        div > { " " } <
        div className = "col-md-6" >
        <
        input className = "form-input"
        type = "text"
        id = "edBody" / >
        <
        /div>{" "} < /
        div > { " " } <
        br / > < br / > { " " } <
        div className = "row" >
        <
        div className = "col-md-12 text-center" >
        <
        input type = "submit"
        name = "submit"
        className = "btn1 btn-primary btn-block "
        value = "ENVOYER" /
        >
        { " " } <
        /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } <
        /form>
    );
};
export default Help;