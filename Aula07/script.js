
//fetch =>
 
// getPets();
 
// async function getPets(){
//     //Comando fetch usando async/await
//     const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
//     const pets = await response.json();
//     console.log(pets);
// };
 
fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then(rest => rest.json())
    .then(data => cards(data))
 
 
function cards(data){
 
        console.log(cards);
    }