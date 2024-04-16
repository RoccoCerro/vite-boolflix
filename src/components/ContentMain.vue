<template>
  <div class="content-main">
    <div class="container">
      <ul class="row">
        <li v-for="movie in store.results" class="col-2">
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
      console.log('store main',this.store)
    }
  }
</script>

<style lang="scss" scoped>

</style>