const producto = [
    {nombre: "TV", precio: 2000},
    {nombre: "Laptop", precio: 24000},
    {nombre: "Monitor", precio: 4000, descuento: true},
    {nombre: "Plancha", precio: 1500},
];

for(let i=0; i<producto.length; i++){
    if(producto[i].descuento){
        console.log(`Estas comprando  un ${producto[i].nombre} el cual aplica a un descuento del 20% sobre este precio ${producto[i].precio}`);
        continue;
    }
    console.log(`El producto ${producto[i].nombre} tiene un precio ${producto[i].precio}`);
}