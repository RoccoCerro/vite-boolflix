<template>
  
      <li class="col">

          <img :src="concatUrl()" alt="">

      </li>
  
</template>

<script>

  export default {
    // data(){
    //   return{
    //   }
    // },

    props:{
      element: {
        type: Object
      }
    },

    methods:{
      concatUrl(){
          return `https://image.tmdb.org/t/p/w342${this.element.poster_path}`

      }
    }
  }
</script>

<style lang="scss" scoped>
  .col{
    flex-basis: 200px;
    flex-shrink: 0;
  }
</style>