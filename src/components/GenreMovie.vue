<template>
  <ul>
    <li>
      <h3>Generi: </h3>
      <span v-for="genre in genres"> {{ genre }} </span>
      <span >,</span>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios';
  import {store} from '../store.js'

  export default {
    props: ["genresProps"],

    data(){
      return{
        genreName:[],
        store,
      }
    },

    methods:{
      
    },
    
    computed:{
      genres(){
        return this.genresProps.map(genreId => this.store.genres[genreId]);
      }
    },

    created(){
      
    }
  
  }
</script>

<style lang="scss" scoped>
  span{
    padding-right: 5px;
  }
</style>