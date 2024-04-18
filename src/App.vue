<template>
  <ContentHeader @clickOnButtonHeader="[calledMovieServer(), calledTvServer()]" />
  <ContentMain />
</template>

<script>
  import ContentHeader from "./components/ContentHeader.vue";
  import ContentMain from './components/ContentMain.vue';
  import axios from 'axios';
  import {store} from './store.js';

  export default {
    components:{
      ContentHeader,
      ContentMain,
    },

    data(){
      return{
        store: store,
        api_key: "0e75ad5772cce745dda6b939d03ca9de",
      }
    },

    methods:{
      calledMovieServer(){
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie`,{
            params: {
              api_key: this.api_key,
              query: this.store.movie.query,
            }
            }
          )
        .then((res)=>{
          // console.log('Risultato res', res)
          // console.log('Risultato res.data', res.data)
          // console.log('Risultato res.data.results', res.data.results)

          this.store.movie.results = res.data.results
          // store.movie.results = res.data.results 
          this.store.movie.page = res.data.page
          this.store.movie.total_pages = res.data.total_pages
          this.store.movie.total_results = res.data.total_results

          console.log('Risultato this.store movie', this.store.movie)
          console.log('Risultato store movie', store.movie)
        })
      },
      calledTvServer(){
        axios
          .get(
            'https://api.themoviedb.org/3/search/tv', {
            params: {
            api_key: this.api_key,
            query: this.store.movie.query,
            }
            }
          )
          .then((res)=>{
            this.store.tv.results = res.data.results
            // store.tv.results = res.data.results 
            this.store.tv.page = res.data.page
            this.store.tv.total_pages = res.data.total_pages
            this.store.tv.total_results = res.data.total_results
            
            console.log('Risultato serie tv', store.tv)
          })
      }
    },
    mounted(){
      
    },

    created(){
      this.calledMovieServer();
      this.calledTvServer();
      this.store.calledNowPlaying();
      this.store.calledGenreMovieList();
    }
  }

</script>

<style lang="scss">
  @use './style/general.scss' as *;
</style>