<template>
  <div class="content-header">
    <div class="container">
      <div class="row">
        <div class="col brand">
          <img src="../assets/Netflix_Logo.png" alt="">
        </div>
        <div class="col search">
          <input v-model="query" type="text" placeholder="Inserisci il nome del film" @keyup.enter="[ searchMovie(), $emit('clickOnButtonHeader') ]">
          <button @click="[ searchMovie(), $emit('clickOnButtonHeader') ]" ><font-awesome-icon class="icon-search" :icon="['fas', 'magnifying-glass']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'

  export default {
    data(){
      return{
        store: store,
        query: ""
      }
    },

    methods:{
      searchMovie(){
        this.store.movie.query = this.query
        console.log(store.movie.query)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/variables';

  .content-header {
    padding: 20px 0;

    .row {
      justify-content: space-between;
      align-items: center;
    }

    .search{
      display: flex;
    }

    input, button {
      height: 30px;
      border: none;
      border-radius: variables.$radius;   
    }

    button {
      background-color: currentColor;
      padding: 0 15px;
      cursor: pointer;

      &:hover{
          background-color: rgb(92, 91, 91);
        }

      .icon-search{
        color: white;
        font-size: 20px;
      }
      
    }

    input {
      outline: none;
      margin-right: 10px;
      padding: 0 5px;
    }

    img {
      width: 170px;
    }
  }
</style>