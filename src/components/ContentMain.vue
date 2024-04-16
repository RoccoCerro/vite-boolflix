<template>
  <div class="content-main">
    <div class="container">
      <ul class="row">
        <li v-for="movie in store.results" class="col-2">
          <div class="card">
            <div class="card-img">

            </div>
            <ul class="card-description">
              <li>{{ movie.title }}</li>
              <li>{{ movie.original_title }}</li>
              <li>{{ movie.original_language }}</li>
              <li>{{ movie.vote_average }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'

  export default {
    data(){
      return{
        store: store,
      }
    },

    created(){
      console.log('store main',this.store)
    }
  }
</script>

<style lang="scss" scoped>

</style>