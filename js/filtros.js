/**
 * Created by obelich on 12/02/17.
 */

var app = new Vue({
  el: 'main',
  data: {
    message: 'Hello Vue!',
    minimo: 8,
    busqueda: '',
    juegos: [
      {
        titulo: 'Counter Strike GO',
        genero: 'fps',
        puntuacion: 9,
      },
      {
        titulo: 'Minecraft PE',
        genero: 'sansbox',
        puntuacion: 9,
      },
      {
        titulo: 'Pokemon',
        genero: 'rpg',
        puntuacion: 9,
      },
      {
        titulo: 'Capitan comando',
        genero: 'plataformas',
        puntuacion: 7,
      }
    ]
  },

  computed: {
    mejoresJuegos() {
      return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
    },
    buscarJuego() {
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));

    }


  }

});
