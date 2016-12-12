//redondea con 2 decimales
//TODO: Poder pasarle un atributo para indicar número de decimales
function round(num){
  num = Math.round(num * 100) / 100;
  return num;
}

module.exports.round = round;
//convierte grados a radianes
function toRadians(deg){
  return deg * Math.PI / 180 ;
}
module.exports.toRadians = toRadians;

//ordena un array de objetos en modo ascendente por el valor de uno de sus atributos.
function arraySort(arrayObjects){
  arrayObjects.sort(function(a, b){return a.points-b.points});
}
module.exports.arraySort = arraySort;
