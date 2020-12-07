//Function Declaration
sumar()
function sumar() {
    console.log( 2 + 2 );
}

//function expression
sumar2();
const sumar2 = function () {
    console.log( 3 + 3 );
}

//Diferencia entre function expression y declaration
// El primer codigo funciona, el segundo pedazo de codigo no funciona
// Ya que la function expression se debe declarar antes de mandarla a llamar