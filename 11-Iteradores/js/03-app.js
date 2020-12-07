//Fiz buzz 

//Multiplo de 3
//Multiplo de 6
//Multiplo de 3 y 5

const numeros = [ 3, 6, 5, 8, 9, 10, 20, 40, 60, 80, 100, 33, 99];

for (let i=0; i<numeros.length; i++){
    if( numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
        console.log(`FIZZ BUZZ ${numeros[i]}`);
    }else if( numeros[i] % 3 === 0){
        console.log(`FIZZ ${numeros[i]}`);
    }else if( numeros[i] % 5 === 0){
        console.log(`BUZZ ${numeros[i]}`);
    }else{
        console.log(`No es ni fizz ni buzz ${numeros[i]}` );
    }
}