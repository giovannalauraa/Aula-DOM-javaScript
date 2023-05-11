function init(){

    const h1 = document.createElement("h1");
    h1.innerHTML = "Minha primeira página HTML";
    document.body.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = "Aprendendo HTML básico com exercício prático";
    document.body.appendChild(p);

    const span = document.createElement("span");
    span.innerHTML = "Menu:";
    document.body.appendChild(span);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    const li1 = document.createElement("li");
    li1.innerHTML = "Item 1";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.innerHTML = "Item 2";
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerHTML = "Item 3";
    ul.appendChild(li3);

    // const titulo = document.getElementById("titulo");
    // titulo.innerHTML = "Minha primeira página HTML";
    // const paragrafo = document.getElementById("paragrafo");
    // paragrafo.innerHTML = "Aprendendo HTML básico com exercício prático";
    // const menu = document.getElementById("paragrafo-2");
    // menu.innerHTML = "Menu:";
    // const item1 = document.getElementById("item-1");
    // item1.innerHTML = "item 1";
    // const item2 = document.getElementById("item-2");
    // item2.innerHTML = "item 2";
    // const item3 = document.getElementById("item-3");
    // item3.innerHTML = "item 3";
}
window.onload = init;
