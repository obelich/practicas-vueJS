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


Vue.component('mis-tareas-independientes', {
  template: `
    <ul>
      <li v-for="tarea in tareasAjax">{{tarea.title}} </li>
    </ul>
  `,
  mounted: function(){

    var _this = this;
    axios.get('https://jsonplaceholder.typicode.com/todos').then(function(response){
      _this.tareasAjax = response.data;
      console.log('hola')
    })

  },

  data: function(){
    return {
      tareasAjax: [],
      tareasLocales: [
        {title: 'Mitarea 1'},
        {title: 'Mitarea 2'},
        {title: 'Mitarea 3'},
        {title: 'Mitarea 4'}
      ]
    }

  }
});





new Vue({
  el: 'main',

  mounted: function(){
    let _this = this;
    axios.get('https://jsonplaceholder.typicode.com/todos').then(function(response){
      _this.tareasAjax = response.data;
    })

  },

  data: {
    tareasAjax: [],
    tareasLocales: [
      {title: 'Mitarea 1'},
      {title: 'Mitarea 2'},
      {title: 'Mitarea 3'},
      {title: 'Mitarea 4'}
    ]
  },


  // mounted(){
  //     axios.get('https://jsonplaceholder.typicode.com/todos').then((response) =>{
  //         this.tareasAjax = response.data;
  //         console.log(tareasAjax);
  //   });
  // },



});