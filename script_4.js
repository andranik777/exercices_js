const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Les entrepreneurs qui sont nés dans les années 70 ;

for (let i in entrepreneurs) { console.log(entrepreneurs[i]["year"]) }

var e_birth_year = [];
for (let i in entrepreneurs) { if (entrepreneurs[i]["year"] > 1970) { e_birth_year.push(entrepreneurs[i]["year"]) } }
console.log("Entrepreneurs qui sont nés dans les années 70")
console.log(e_birth_year)

// Sors une array qui contient le prénom et le nom des entrepreneurs ;

var e_name = [];

for (let i in entrepreneurs) {
    e_name.push([entrepreneurs[i]["first"], entrepreneurs[i]["last"]])

}
console.log("le prénom et le nom des entrepreneurs")
console.log(e_name)


// Age entrepreneurs

var d = new Date();
var n = d.getFullYear();
e_age = []

for (let i in entrepreneurs) {
    e_age.push([entrepreneurs[i]["first"], entrepreneurs[i]["last"], 2020 - entrepreneurs[i]["year"]])

}
console.log("L'age dee entrepreneurs")
console.log(e_age)


//////////////

/*

var liste = e_name.flat();

// Création d'objet temporaire qui contient les positions
// et les valeurs en minuscules
var mapped = liste.map(function(e, i) {
    return { index: i, value: e.toLowerCase() };
})

// on trie l'objet temporaire avec les valeurs réduites
mapped.sort(function(a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
});

// on utilise un objet final pour les résultats
var result = mapped.map(function(e) {
    return liste[e.index];
});
console.log(result)

*/
// trier par nom
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.last.toUpperCase();
    const bandB = b.last.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
console.log("trier les entrepreneurs par ordre alphabetique selon leurs nom");
console.log(entrepreneurs.sort(compare));

//arr.sort()
//arr.sort(fonctionComparaison)