const cards = document.querySelector(".card");
const infor = document.querySelector(".info");
const titulo = document.querySelector(".titulo");


cards.addEventListener( "click", (e) => {
    e.stopPropagation();
    console.log("Mensaje.....");
});

infor.addEventListener( "click", (e) => {
    e.stopPropagation();
    console.log("Mensaje.....");
});

titulo.addEventListener( "click", (e) => {
    e.stopPropagation();
    console.log("Mensaje.....");
});