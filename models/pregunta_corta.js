var Pregunta = require('../models/pregunta.js');

function PreguntaCorta(x) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.tipo_ = "corta";
}

PreguntaCorta.prototype = new Pregunta();

PreguntaCorta.prototype.constructor = PreguntaCorta;

PreguntaCorta.prototype.get_tipo = function(){
  return this.tipo_;
}

PreguntaCorta.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaCorta;
