function init(){
    const tempsByHour = 
        [59.2, 60.1, 63, 65, 62];
    console.log(`Tamanho array: ${tempsByHour}`);
    const ul = document.createElement("ul");
    for(let i = 0; i < tempsByHour.length; i++){
        const li =   document.createElement("li");
        if(i == 0){
            li.innerHTML = `Temp à meia noite é ${tempsByHour[i]}`;
        }else{
            li.innerHTML = `Temp às ${i} é ${tempsByHour[i]}`;
        }
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}


window.onload = init;