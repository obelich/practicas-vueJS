
vm = new Vue({
  el: 'main',

  data: {
    nuevaTarea: null,
    tareas: [
      "Aprender Vue.js",
      "Aprender ES6",
      "Publicar al todos los ias"
    ]
  },

  methods: {
    agregarTara: function () {
      // this, hace referencia a la instancia VUE
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = null;
    }
  }
});