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

    components:{
      CardMovie
    },

    created(){
      console.log('store main',this.store.movie)
    }
  }
</script>

<style lang="scss" scoped>

</style>