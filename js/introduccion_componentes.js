/**
 * Created by obelich on 25/03/17.
 */
// Vue.component('mis-tareas', require('./templates/mis_tareas.vue'));


Vue.component('mis-tareas', {
  props: ['tareas'],
  template: `
    <ul>
      <li v-for="tarea in tareas">{{tarea.title}} </li>
    </ul>
  `
});


new Vue({
  el: 'main',



  mounted(){
      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) =>{
          this.tareasAjax = response.data;
          console.log(tareasAjax);
    });
  },

  data: {
    tareasAjax: []
  },

});