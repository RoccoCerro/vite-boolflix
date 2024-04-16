<template>
  <ContentHeader />
</template>

<script>
  import ContentHeader from "./components/ContentHeader.vue";
  import axios from 'axios';

  export default {
    components:{
      ContentHeader
    },

    methods:{
      calledMovieServer(){
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie`,{
            params: {
              api_key: "0e75ad5772cce745dda6b939d03ca9de",
              query: "futuro"
            }
          }
        )
        .then((res)=>{
          console.log(res)
          console.log(res.data)
        })
      }
    },

    created(){
      this.calledMovieServer()
    }
  }
</script>

<style lang="scss">
  @use './style/general.scss' as *;
</style>