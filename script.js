document.getElementById("h1").innerHTML = "External JS File";

function myfunction() {
    var a = document.getElementById("num");
    if (a.checkValidity()) {
        document.getElementById("message").innerHTML = "input ok";
    } else {
        document.getElementById("message").innerHTML = a.validationMessage;
    }
}
