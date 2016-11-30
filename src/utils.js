//redondea con 2 decimales
//TODO: Poder pasarle un atributo para indicar número de decimales
function round(num){
  num = Math.round(num * 100) / 100;
  return num;
}
//convierte grados a radianes
function toRadians(deg){
  return deg * Math.PI / 180 ;
}

//ordena un array de objetos en modo ascendente por el valor de uno de sus atributos.
function arraySort(arrayObjects){
  arrayObjects.sort(function(a, b){return a.points-b.points});
}


var utilsMath = {
  round : round,
  toRadians : toRadians
}

var utilsObjects = {
  //ordena de mayor a menor
  arraySort: arraySort
}

console.log(utilsObjects);
//Exporting metods for contexts
export {utilsMath, utilsObjects};

//Export all metods
export default {round, toRadians, arraySort};
