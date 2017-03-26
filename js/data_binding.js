/**
 * Created by obelich on 9/03/17.
 */
//Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name=_token]').attr('content');


var register = new Vue({
	el: 'main',

	data: {
		test: "Hola VueJS",
    tareas: [
      {titulo: 'Hacer la compra', completado: false},
      {titulo: 'Aprender Vue.js', completado: false},
      {titulo: 'Aprender Firebase', completado: false},
      {titulo: 'Dominar ES6', completado: false},
      {titulo: 'Salir a correr', completado: false}
    ]
	},

	methods: {


  }
});