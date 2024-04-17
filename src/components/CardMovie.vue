<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description ">
      <li>{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-if="movie.original_language === 'it'" :key="movie.id">
        <img src="../assets/italiana.webp" alt="Bandiera Italiana">
      </li>
      <li v-else>
        le flag non ci sono in FontAwesome
      </li>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/styleCard.scss';
</style>