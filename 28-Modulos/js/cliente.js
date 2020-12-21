export const nombre = "Jorge Abascal";
export const saldo = 2000;


export function descripcionUsuario( nombre, saldo){
    console.log(`Bienvenido ${nombre} y tu saldo es de ${saldo}`);
}

export function saldoFavor(saldo){
   if( saldo > 0){
     console.log("Tienes saldo a favor");
   }else{
       console.log("Tu saldo es negativo");
   }
}


export default function (){
  const hola = "Hola";
  console.log(hola);
};