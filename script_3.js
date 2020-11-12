let answer
while (isNaN(answer)) {
    answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

}

var pyramide = (num) => {
    for (let i = 1, j = num; i <= num; i++) {
        let space = " ";
        let a = "#";
        j--;
        console.log(space.repeat(j) + a.repeat(i));
    }
}

pyramide(answer)