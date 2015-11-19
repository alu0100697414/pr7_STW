function Respuesta(x){
  
  var f;

  if(typeof(x)==='string' || typeof(x)==='number'){
    f = function(respuesta){ return respuesta === x ; }
  }

  else if(x instanceof RegExp === true){
    f = function(respuesta){ return x.exec(respuesta)}
  }
}

module.exports = Respuesta;

// http://stackoverflow.com/questions/4339288/typeof-for-regexp
