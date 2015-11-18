var AbstractQuiz = require('../models/abstract_quiz_model.js');
var PreguntaCorta = require('../models/pregunta.js');
var PreguntaLarga = require('../models/pregunta.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: new PreguntaCorta('¿Capital de Italia?'),
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },

    { pregunta: new PreguntaLarga('¿Quien reinaba en España cuando se descubrió América?'),
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    },

    { pregunta: new PreguntaCorta('¿Cuál es el último campeón de la Champions League?'),
      respuesta: function(x) {
        return (/\s*barcelona\s*$/i).exec(x);
      }
    },

    { pregunta: new PreguntaCorta('¿Quién es el protagonista en la película "The Imitation Game"?'),
      respuesta: function(x) {
        return (/\s*alan turing\s*$/i).exec(x);
      }
    },

    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: new PreguntaLarga('Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado'),
      respuesta: function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
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
        { pregunta: new PreguntaCorta('¿ '+n1+'x'+n2+" ?"),
          respuesta: function(x) {
            return (x == n1*n2);
        }
      })
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

module.exports = Quiz;
