

function writeCards(nameForCards, suprise) { 

    const newArray = []

    for (let i = 0; i < nameForCards.length; i++) {
        newArray.push(`Thank you, ${nameForCards[i]}, for the wonderful ${suprise} gift!`);
    }

    return newArray

}
writeCards(["Guadalupe", "Ollie", "Aki"], "suprise");

function countDown() { 
    let count = 0;
while (count < 11) {
  console.log(count++);
}
}