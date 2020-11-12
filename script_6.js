const new_arn = (adn) => {
    a = adn
    var b = a.split("");
    arn = [];
    var arr = [];
    for (let i in b) {

        if (b.length >= 0) {
            arr.push(b.splice(0, 3))
        }
        arr.push(b.splice(0, 3))
    }

    var b = a.split("");

    for (let i in arr) {
        a = arr[i].join("")
        if (a === "UCU" || a === "UCC" || a === "UCA" || a === "UCG" || a === "AGU" || a === "AGC") {
            arn.push("Sérine")

        } else if (a === "CCU" || a === "CCC" || a === "CCA" || a === "CCG") {

            arn.push("Proline")

        } else if (a === "UUA" || a === "UUG") {

            arn.push("Leucine")

        } else if (a === "UUU" || a === "UUC") {

            arn.push("Phénylalanine")

        } else if (a === "CGU" || a === "CGC" || a === "CGA" || a === "CGG" || a === "AGA" || a === "AGG") {

            arn.push("Arginine")
        } else if (a === "UAU" || a === "UAC") {

            arn.push("Tyrosine")

        }
    }
    return console.log(arn.join("-"))
}

new_arn("UUACGCAGUAGA")
new_arn("CCGUCGUUGCGCUACAGC")
new_arn("CCUCGCCGGUACUUCUCG")