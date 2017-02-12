/**
 * Created by obelich on 11/02/17.
 */
var app = new Vue({
  el: 'main',
  data: {
    mensaje: 'Hola Mundo :) !',
    nuevaTarea: null,
    tareas: [
      {
        titulo: 'Aprender Vue.js',
        prioridad: true,
        antiguedad: 23
      },

      {
        titulo: 'Aprender ES6',
        prioridad: false,
        antiguedad: 135
      },
      {
        titulo: 'Publicar algo todos los dias',
        prioridad: true,
        antiguedad: 378
      }
    ]
  },

  methods: {
    agregarTara: function () {
      // this, hace referencia a la instancia VUE
      this.tareas.unshift({titulo: this.nuevaTarea, prioridad: true, antiguedad: 0});
      this.nuevaTarea = null;
    }
  },

  computed: {
    mensajeAlReves() {
      return this.mensaje.split('').reverse().join('');
    },
    tareasConPrioridad(){
      return this.tareas.filter((tarea) => tarea.prioridad );
    },

    tareasPorAntiguedad(){
      return this.tareas.sort( (a, b) => b.antiguedad - a.antiguedad );
    }
  }


});