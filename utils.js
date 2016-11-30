(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Utils = require('./src/utils');
var utils = new Utils();
//console.log(utils);
//console.log(utils.round(2.2345566));
module.exports = utils;

},{"./src/utils":2}],2:[function(require,module,exports){
function Utils() {
}

//redondea con 2 decimales
//TODO: Poder pasarle un atributo para indicar número de decimales
Utils.prototype.round = function (num){
  num = Math.round(num * 100) / 100;
  return num;
};

//ordena de mayor a menor
Utils.prototype.arraySort = function (arrayObjects){
  arrayObjects.sort(function(a, b){return a.points-b.points});
};

//convierte grados a radianes
Utils.prototype.toRadians = function (deg){
  return deg * Math.PI / 180 ;
};

//(Utils)();
module.exports = Utils;

},{}]},{},[1]);
