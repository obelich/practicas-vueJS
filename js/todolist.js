/**
 * Created by obelich on 5/02/17.
 */

var app = new Vue({
  el: '#todo-list',
  data: {
    nombre: 'DO Podcast',
    tareas: [
      {nombre: 'Hacer la compra'},
      {nombre: 'Grabar episodio'},
      {nombre: 'Hacer compras X'}
    ]
  },

  methods: {
    guardarTarea: function (tarea) {
      this.tareas.push({nombre: tarea});
      this.nombre = "";

    }
  }
});
