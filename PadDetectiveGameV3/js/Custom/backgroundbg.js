var button = document.getElementById("ondervraagKnop");

var persona = [
    "../img/persona1.png",
    "../img/persona2.png",
    "../img/persona3.png",
    "../img/persona4.png",
    "../img/persona5.png",
    "../img/persona6.png",
    "../img/persona7.png",
    "../img/persona8.png",
    "../img/persona9.png"
];


var imageSource = document.getElementById("personaImage");
var modalBackground = document.getElementById("backgroundModal");
var path = imageSource.getAttribute("src");

button.addEventListener("click" , function() {
    if (persona[0] == path || persona[4] == path || persona[7] == path)
        modalBackground.style.background = "#69A1A0";
    else if (persona[1] == path || persona[5] == path || persona[6] == path)
        modalBackground.style.background = "#BA9A73";
    else if (persona[2] == path || persona[3] == path || persona[8] == path)
        modalBackground.style.background = "#AF848E";
});

console.log("Changed background color of modal: ondervraging.");