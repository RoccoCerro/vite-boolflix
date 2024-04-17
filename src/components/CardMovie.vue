<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description">
      <li>{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-if="movie.original_language === 'it'" :key="movie.id">
        <img src="../assets/italiana.webp" alt="Bandiera Italiana">
      </li>
      <li v-else>
        le flag non ci sono in FontAwesome
      </li>
      <!-- <li v-html="fullStar"></li> -->
      <li>
        <!-- <font-awesome-icon v-for="n in rating" :icon="['fas', 'star']" />
        <font-awesome-icon v-for="n in 5-rating" :icon="['far', 'star']" /> -->
        <VoteStar :voteAverage="rating" />
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
        return `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
      },

      quantityOfTheSame(){
        this.rating = Math.round(this.movie.vote_average / 2);
      }
      // quantityOfTheSame(){
      //   const rating = Math.round(this.movie.vote_average / 2);
      //   console.log("rating", rating)
      //   for(let i = 1; i <= 5; i++){
      //     if(rating >= i){
      //       this.fullStar += `<span class="color-red"><font-awesome-icon :icon="['fas', 'star']" /></span>`          
      //     }else if(rating <= i){
      //       this.fullStar += '<font-awesome-icon :icon="["fas", "star"]" />'
      //     }
      //   }
      // }
    },

    created(){
      this.quantityOfTheSame()
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