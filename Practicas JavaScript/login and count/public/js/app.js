const sign_un_btn = document.querySelector("#sign-up-btn");
const sing_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");


sign_un_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sing_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
