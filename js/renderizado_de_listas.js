/**
 * Created by obelich on 7/02/17.
 */
vm = new Vue({
  el: 'main',

  data: {
    laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    tareas: [
      {nombre: 'Hacer la compra', prioridad: 'Baja'},
      {nombre: 'Aprender VUE y Firebase', prioridad: 'Alta'},
      {nombre: 'Ir al gimnasio', prioridad: 'Alta'}
    ],

    persona: {
      nombre: 'Oscar Miguel Amezcua',
      profesion: 'Developer',
      ciudad: 'Tijuana'
    }
  }
});