<template>
  <ContentHeader />
  <ContentMain />
</template>

<script>
  import ContentHeader from "./components/ContentHeader.vue";
  import ContentMain from './components/ContentMain.vue';
  import axios from 'axios';
  import {store} from './store.js'

  export default {
    components:{
      ContentHeader,
      ContentMain
    },

    data(){
      return{
        store: store,
        api_key: "0e75ad5772cce745dda6b939d03ca9de",
        query: 'futuro',
      }
    },

    methods:{
      calledMovieServer(){
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie`,{
            params: {
              api_key: this.api_key,
              query: this.query,
            }
          }
        )
        .then((res)=>{
          console.log('Risultato res', res)
          console.log('Risultato res.data', res.data)
          console.log('Risultato res.data.results', res.data.results)

          this.store.results = res.data.results
          // store.results = res.data.results 
          this.store.page = res.data.page
          this.store.total_pages = res.data.total_pages
          this.store.total_results = res.data.total_results

          console.log('Risultato this.store', this.store)
          console.log('Risultato store', store)
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