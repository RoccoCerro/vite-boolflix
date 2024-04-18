<template>
  <h3>Attori: </h3>
  <div v-for="actor in store.castMovie.cast">
    {{actor.name}}
  </div>
</template>

<script>
  import axios from 'axios'
  import {store} from '../store.js'

  export default {
    data(){
      return{
        store

      }
    },

    methods:{
      
    },

    created(){
      this.store.calledCastServer()
    }
  }
</script>

<style lang="scss" scoped>

</style>