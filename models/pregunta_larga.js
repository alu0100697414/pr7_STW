var Pregunta = require('../models/pregunta.js');

function PreguntaLarga(x) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.tipo_ = "larga";
}

PreguntaLarga.prototype = new Pregunta();

PreguntaLarga.prototype.constructor = PreguntaLarga;

PreguntaLarga.prototype.get_tipo = function(){
  return this.tipo_;
}

PreguntaLarga.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaLarga;
