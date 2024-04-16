<template>
  <div class="content-header">
    <div class="container">
      <div class="row">
        <div class="col">LOGO</div>
        <div class="col">
          <input v-model="query" type="text" placeholder="Inserisci il nome del film">
          <button @click="[ searchMovie(), $emit('clickOnButtonHeader') ] ">Cerca</button>
          {{ query }}
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
        this.store.query = this.query
        console.log(store.query)
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
    }

    input, button {
      height: 30px;
      border: none;
      border-radius: variables.$radius;
      padding: 0 5px;
    }

    input {
      outline: none;
      margin-right: 10px;
    }
  }
</style>