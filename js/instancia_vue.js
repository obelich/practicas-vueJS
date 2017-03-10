/**
 * Created by obelich on 9/03/17.
 */
//Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name=_token]').attr('content');


const vm1 = new Vue({
	el: 'main',

	data: {
		mensaje: "Instancia VUE 1"
	},
  //Acciones que se ejecutan en el transcurso de  una accion

  beforeUpdate() {
	  console.log('BeforeUpdate', this.mensaje);
  },

  updated() {
    console.log('Update', this.mensaje);
  },

	methods: {
    alReves(){
      this.mensaje = this.mensaje.split('').reverse('').join('');
      // vm2.mensaje = 'Hola desde instancia 1';
    }

  },

  computed: {
	  mensajeMayusculas(){
	    return this.mensaje.toUpperCase();
    }
  }
});


const vm2 = new Vue({
  el: '#app',

  data: {
    mensaje: "Instancia VUE 2"
  },


});