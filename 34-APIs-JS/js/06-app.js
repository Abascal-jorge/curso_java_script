const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI(){

    //Declarar variables para el microfono con la api nativa de javascript
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function(){
        salida.classList.add("mostrar");
        salida.textContent = "Escuchando...";
    };

    recognition.onspeechend = function(){
        salida.textContent = "Se dejo de grabar...";
        recognition.stop();
    };

    recognition.onresult = function(e){
        console.log(e.results[0][0]);
    }

}