<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description ">
      <li v-if="movie.title !== movie.original_title || movie.name !== movie.original_name">{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-if="thereIsFlag(movie.original_language)">
        <img :src="showFlags(movie.original_language)" alt="">
      </li>
      <li v-else>{{ movie.original_language }}</li>
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
        availableLanguages: ["it","en","zh","fr","es","jp"],
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