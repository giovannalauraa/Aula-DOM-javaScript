function init(){
    const tempByHour = [59.2, 60.1, 63, 65, 62];
    console.log(`Tamanho array: ${tempByHour}`);

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    for(let i = 0; i < tempByHour.length; i++){
        const li = document.createElement("li");
        if(i == 0){
            li.innerHTML = `Temp à meia noite é ${tempByHour[i]}`;
        } else {
            li.innerHTML = `Temp as é ${i} é ${tempByHour[i]}`;
        }
       ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
window.onload = init;



// function init(){
//     const planet = document.getElementById("greenplanet");
//     planet.innerHTML = "Red alert: hit by phaser fire!"; // Alterando o html usando JavaScript
// }
// window.onload = init;

// var é uma variável que dentro de uma função vira uma variável global
// const é uma variável que não se altera