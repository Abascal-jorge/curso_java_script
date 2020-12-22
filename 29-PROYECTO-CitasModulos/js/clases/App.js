import {
    formulario,
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput
} from "../etiquetadoHtml.js";

import { nuevaCita, datosCita } from "../Funciones.js"


class App{
    constructor(){
        this.initApp();
    }

    initApp(){
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
        
        formulario.addEventListener('submit', nuevaCita);
    }
}

export default App;