<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description ">
      <li v-if="movie.title !== movie.original_title || movie.name !== movie.original_name">Titolo: {{ movie.title }} {{ movie.name }}</li>
      <li>
        <strong>Titolo Originale: </strong> 
        <h3>
          {{ movie.original_title }} {{ movie.original_name}}
        </h3>
      </li>
      <li v-if="thereIsFlag(movie.original_language)">
        <span>Lingua: </span>
        <img :src="showFlags(movie.original_language)" alt="">
      </li>
      <li v-else>
        <span>Lingua: </span>
        {{ movie.original_language }}
      </li>
      <li>
        <VoteStar :voteAverage="movie.vote_average" />
      </li>
      <li>Overview: {{ movie.overview }}</li>
      <li>
        <ActorsOfTheMovie />
      </li>
      <li :class="{'display-none' : movie.genre_ids.length === 0}">
        <GenreMovie :genresProps="movie.genre_ids"></GenreMovie>
      </li>
    </ul>
  </div>
</template>

<script>
  import VoteStar from "./VoteStar.vue";
  import ActorsOfTheMovie from './ActorsOfTheMovie.vue'
  import GenreMovie from './GenreMovie.vue'

  export default {
    data(){
      return{
        rating: null,
        flagLanguage: "",
        availableLanguages: ["it","en","zh","fr","es","jp","ja","cs","tr","de","tl","ar","pt","fi"],
      }
    },

    components:{
      VoteStar,
      ActorsOfTheMovie,
      GenreMovie
    },

    props: {
      movie: Object,
    },

    methods:{
      concatUrl(){
        return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
      },
      showFlags(language){
        return `/${language}.png`
      },

      thereIsFlag(language){
        let result = false;

        this.availableLanguages.forEach((el)=>{
          if (el == language){
            result = true
          }
        })

        return result
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/styleCard.scss';
</style>