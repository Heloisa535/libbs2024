const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

const allPs = document.querySelectorAll("p");

//Como eu acesso uma Array?
//pelo For e Index
//ForEach

allPs.forEach(element => console.log(element.innerHTML))

console.log(allPs);

button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHtml = `<li>${inputValue}</li>`;
    console.log(nome.value);
lista.innerHTML += templateHtml;
nome.value = "Limpei";

})