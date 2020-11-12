let answer
while (isNaN(answer)) {
    answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

}

var pyramide = (num) => {
    for (let i = 1; i <= num; i++) {
        let a = "#"
        console.log(a.repeat(i));
    }
}

pyramide(answer)