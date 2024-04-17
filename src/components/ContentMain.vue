<template>
  <div class="content-main">
    <div class="container">
      <ul class="row">
        <li v-for="movie in store.movie.results" class="col-3">
          <CardMovie :movie="movie"/>
        </li>
        <li v-for="movie in store.tv.results" class="col-3">
          <CardMovie :movie="movie"/>
        </li>
        <li class="no-movie" v-if="store.movie.results.length == 0">NON CI SONO RISULTATI TRA I FILM PER LA RICERCA EFFETTUATA</li>
        <li class="no-tv" v-if="store.tv.results.length == 0">NON CI SONO RISULTATI TRA LE SERIE TV PER LA RICERCA EFFETTUATA</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'
  import CardMovie from './CardMovie.vue'

  export default {
    data(){
      return{
        store: store,
      }
    },

    methods:{
    
    },

    components:{
      CardMovie
    },

    created(){
      console.log('store main',this.store.movie)
    }
  }
</script>

<style lang="scss" scoped>
  .content-main{

    li.no-movie, li.no-tv{
      background-color: rgba(255, 255, 255, 0.193);
      margin-left: 15px;
      margin-top: 5px;
      padding: 5px 10px;
      border-radius: 5px;
    }
  }

</style>