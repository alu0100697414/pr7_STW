var AbstractQuiz = require('../models/abstract_quiz_model.js');
var PreguntaCorta = require('../models/pregunta_corta.js');
var PreguntaLarga = require('../models/pregunta_larga.js');
var Respuesta = require('../models/respuesta.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: new PreguntaCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿En que año se descubrió América?'),
      respuesta: new Respuesta('1492')
    },

    { pregunta: new PreguntaLarga('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: new Respuesta(/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)|(reyes\s+cat[oó]licos)\b/i)
    },

    { pregunta: new PreguntaCorta('¿Cuál es el último campeón de la Champions League?'),
      respuesta: new Respuesta(/\s*barcelona\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿Quién es el protagonista en la película "The Imitation Game"?'),
      respuesta: new Respuesta(/\s*alan turing\s*$/i)
    },

    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado'),
      respuesta: new Respuesta( function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      })
    }
  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: new PreguntaCorta('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Respuesta(function(x) {
            return (x == n1*n2);
        })
      });
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x){
  return this.q[x]['pregunta'].get_pregunta();
}

Quiz.prototype.getQuestion = function(x){
  return x['pregunta'].get_pregunta();
}

Quiz.prototype.getArea = function(x){
  return x['pregunta'].get_area();
}

module.exports = Quiz;
