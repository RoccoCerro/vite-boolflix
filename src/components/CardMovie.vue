<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description">
      <li>{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-if="movie.original_language === 'it'">
        <img src="../assets/italiana.webp" alt="">
      </li>
      <li v-else>
        le flag non ci sono in FontAwesome
      </li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      movie: Object,
    },

    methods:{
      concatUrl(){
        return `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-description {

    img {
      width: 15px;
    }
  }
</style>