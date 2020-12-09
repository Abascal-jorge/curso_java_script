const card = document.querySelector(".card");

card.addEventListener("click", e => {
    if( e.target.classList.contains("precio") ){
        console.log("Desde precio");
    }
    if( e.target.classList.contains("info") ){
        console.log("Desde info");
    }
    if( e.target.classList.contains("card") ){
        console.log("Desde card");
    }
});