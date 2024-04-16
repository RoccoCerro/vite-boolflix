<template>
  <div class="card">
    <div class="card-img">
      <img :src="concatUrl()" alt="Img non presente nel database">
    </div>
    <ul class="card-description">
      <li>{{ movie.title }} {{ movie.name }}</li>
      <li>{{ movie.original_title }} {{ movie.original_name}}</li>
      <li v-if="movie.original_language === 'it'">
        <img src="../assets/italiana.webp" alt="Bandiera Italiana">
      </li>
      <li v-else>
        le flag non ci sono in FontAwesome
      </li>
      <li v-html="fullStar"></li>
      <li>{{ rating }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        fullStar:"",
        rating: null,
      }
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
        console.log(this.rating)
        for(let i = 1; i <= 5; i++){
          if(this.rating >= i){
            this.fullStar += '<span class="color-red"><i class="fa fa-solid fa-heart"></i></span>'
          }else if(this.rating <= i){
            this.fullStar += '<i class="fa-solid fa-heart"></i>'
          }
        }
      }
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