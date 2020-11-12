    var factorielle = (num) => {
        var result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;

        }
        return `Le résultat est : ${result}`
    }

    let answer
    while (isNaN(answer)) {
        answer = prompt("De quel nombre veux-tu calculer la factorielle ?");

    }
    alert(factorielle(answer))