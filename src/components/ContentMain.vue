<template>
  <div class="content-main">
    <div class="container">
      <div class="row">
        <div  class="col">

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
      }
    },

    created(){
      console.log('store main',this.store)
    }
  }
</script>

<style lang="scss" scoped>

</style>