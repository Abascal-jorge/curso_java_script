const checkbox = document.querySelector("#checkbox");

if(window.matchMedia(`(prefers-color-scheme: dark)`).matches){
    checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function(e){
    if( this.checked ){
        document.body.classList.add("is-dark-mode");
        document.body.style.setProperty("--card", "#252b43");
        document.body.style.setProperty("--gray", "#8088ad");
        document.body.style.setProperty("--lightGray", "#1d2029");
        document.body.style.setProperty("--baseBackground", "#1d2029");
        document.body.style.setProperty("--baseColor", "white");
        document.body.style.setProperty("--cardTitle", "#8088ad");
        document.body.style.setProperty("--spinnerChange", "linear-gradient(to right, #4796d2 0%, green 100%)");
        document.body.style.setProperty("--spinnerBolita", "#282943");
    }else{
        document.body.classList.remove("is-dark-mode");
        document.body.style.setProperty("--card", "#f0f3fa");
        document.body.style.setProperty("--gray", "#aeb3c9");
        document.body.style.setProperty("--lightGray", "#f0f3fa");
        document.body.style.setProperty("--baseBackground", "white");
        document.body.style.setProperty("--baseColor", "#1d2029");
        document.body.style.setProperty("--cardTitle", "#6f717e");
        document.body.style.setProperty("--spinnerChange", "linear-gradient(to right, #6f717e 0%, #6f717e 100%)");
        document.body.style.setProperty("--spinnerBolita", "white");
    }
});

       