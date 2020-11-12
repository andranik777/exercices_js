const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

var rented_once
for (let i in books) {
    if (books[i]["rented"] <= 0 || books[i]["rented"] == "") {
        rented_once = false
        break;
    } else { rented_once = true }
}
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
console.log(rented_once)

// Quel est livre le plus emprunté ?

//arr.sort()
//arr.sort(fonctionComparaison)

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.rented;
    const bandB = b.rented;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
books.sort(compare)
let book_most_rented_time = books[books.length - 1]["rented"]
let book_most_rented_title = books[books.length - 1]["title"]

console.log(`le livre le plus emprunté est : ${book_most_rented_title}, emprunté ${book_most_rented_time} fois`)

let book_least_rented_time = books[0]["rented"]
let book_least_rented_title = books[0]["title"]

console.log(`le livre le moins emprunté est : ${book_least_rented_title}, emprunté ${book_least_rented_time} fois`)

for (let i in books) {

    if (books[i].id === 873495) {

        console.log("Le livre avec l'id : " + books[i].id + " est le : " + books[i].title)

    }
}


// Supprime le livre avec l'ID: 133712 ;

for (let i in books) {

    if (books[i].id === 133712) {

        books.splice(i, 1)
    }
}



//  https://love2dev.com/blog/javascript-remove-from-array/


// Les livres triées par ordre alphabéthique

function compare2(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.title.toUpperCase();
    const bandB = b.title.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison;
}
console.log("livre classé par ordre alphabétique")
console.log(books.sort(compare2))