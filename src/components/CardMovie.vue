<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description ">
      <li v-if="movie.title !== movie.original_title || movie.name !== movie.original_name">{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-html="flagLanguage"></li>
      <li>
        <VoteStar :voteAverage="movie.vote_average" />
      </li>
    </ul>
  </div>
</template>

<script>
  import VoteStar from "./VoteStar.vue";

  export default {
    data(){
      return{
        rating: null,
        flagLanguage: "",
      }
    },

    components:{
      VoteStar
    },

    props: {
      movie: Object,
    },

    methods:{
      concatUrl(){
        return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
      },

      showFlags(){
        if(this.movie.original_language === 'it'){
          this.flagLanguage = '<img src="/pubblic/italiana.webp" alt="">'
        }
        else if(this.movie.original_language === 'en'){
          this.flagLanguage = '<img src="/pubblic/bandiera-inghilterra.png" alt="">'
        }
        else{
          this.flagLanguage = 'Non ci sono flag in fontowsome'
        }
      }
    },

    created(){
      this.showFlags()
    }
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/styleCard.scss';
</style>