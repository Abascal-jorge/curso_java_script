function *crearIterador(){
    yield 1;
    yield "Hola mundo";
    yield false;
    yield {hola: "jorge", apellido : "Abascal"};
}

/*const iterador = crearIterador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value.hola);
console.log(iterador.next().done);*/


