const producto = "Monitor curvo de 27 Pulgadas";

console.log(producto);

console.log(producto.replace("Pulgadas", `"`));
console.log(producto.replace("Monitor curvo", "Monitor"));



//Metodo .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));


// alternativa a slice es inteligente este metodo y oprdena el caracter aunque le pases el mayor primero
console.log(producto.substring(0, 10));
console.log(producto.substring(10, 0));

const usuario = "Jorge";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));