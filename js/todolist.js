/**
 * Created by obelich on 5/02/17.
 */

var app = new Vue({
  el: '#todo-list',
  data: {
    nombre: 'DO Podcast',
    nuevaTarea: '',
    tareas: [
      {nombre: 'Hacer la compra'},
      {nombre: 'Grabar episodio'},
      {nombre: 'Hacer compras X'}
    ]
  },

  methods: {
    guardarTarea: function (tarea) {
      if (tarea.trim())
      {
        this.tareas.push({nombre: tarea});
        this.nuevaTarea = "";
      }
      else
      {
        alert("Introduce una tarea");
      }


    },

    eliminarTarea: function(item) {
      var index = this.tareas.indexOf(item);
      if(confirm('Eliminar ' + item.nombre + '?') )
        this.tareas.splice(index, 1);


    }
  }
});
