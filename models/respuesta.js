function Respuesta(x){

  this.f = x;

  // Si es entero o cadena
  if(typeof(this.f)==='string' || typeof(this.f)==='number'){
    return function(res){return res === x;};
  }

  // Si es una expresión regular
  else if(this.f instanceof RegExp === true){
    return function(res){return res.match(x);};
  }

  // Si es una funcion
  else {
    return x;
  }
}

module.exports = Respuesta;
