function Pregunta() {
  this.pregunta_;
  this.tipo_;
}

function PreguntaCorta(x) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.tipo_ = "corta";
}

function PreguntaLarga(x) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.tipo_ = "larga";
}

PreguntaCorta.prototype = new Pregunta();
PreguntaLarga.prototype = new Pregunta();

PreguntaCorta.prototype.constructor = PreguntaCorta;
PreguntaLarga.prototype.constructor = PreguntaLarga;

PreguntaCorta.prototype.get_tipo = function(){
  return this.tipo_;
}

PreguntaLarga.prototype.get_tipo = function(){
  return this.tipo_;
}

PreguntaCorta.prototype.get_pregunta = function(){
  return this.pregunta_;
}

PreguntaLarga.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaCorta;
module.exports = PreguntaLarga;
