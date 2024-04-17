const containerEL = document.querySelector(".container");
const carrers = ["Gamers","Youtubr","Web Developer"];
let carrersIndex = 0;
let charcacterIndex = 0;

updateText()

function updateText() {
    charcacterIndex++;

    containerEL.innerHTML = `<h1>I am ${carrers[carrersIndex].slice(0,1) === "I" ? "an" : "a"} ${carrers[carrersIndex].slice(0,charcacterIndex)}</h1>`;

    
    if(charcacterIndex==carrers[carrersIndex].length){
        carrersIndex++;
        charcacterIndex = 0;
    }

    if(carrersIndex== carrers.length){
        carrersIndex = 0;
    }
    setTimeout(updateText, 400);
}
