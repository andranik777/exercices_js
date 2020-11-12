var a = prompt("Pose une question au gentill chien chien")
console.log(a)

var regex = /[?]/g;
var maching = a.match(regex);


if (maching == "?") {
    console.log("Ouais Ouais...")
} else if (a.match(/Fortnite/gi) == "Fortnite" || a.match(/Fortnite/gi) == "fortnite") {
    console.log("on s'fait une partie soum-soum")
} else if (a === "") {
    console.log("t'es en PLS ?")
} else if (a === a.toUpperCase()) {
    console.log("Pwa, calme - toi...")

} else {
    console.log("balek.")
}










// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match
// https://www.w3schools.com/jsref/jsref_regexp_charset.asp