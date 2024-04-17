<template >
  <font-awesome-icon v-for="n in voteAverage" :icon="['fas', 'star']" />
  <font-awesome-icon v-for="n in 5-voteAverage" :icon="['far', 'star']" /> 
</template>

<script>
  export default {
    props:{
      voteAverage: Number,
    },

    data(){
      return{
        // rating:"",
      }
    },

    methods:{

      // quantityOfTheSame(){
      //   this.rating = Math.round(this.movie.vote_average / 2);
      // },

      // quantityOfTheSame(){
      //   const rating = Math.round(this.voteAverage / 2);
      //   console.log("rating", rating)
      //   for(let i = 1; i <= 5; i++){
      //     if(rating >= i){
      //       this.fullStar += '<span class="color-red"><i class="fa fa-solid fa-heart"></i></span>'
      //     }else if(rating <= i){
      //       this.fullStar += '<i class="fa-solid fa-heart"></i>'
      //     }
      //   }
      // }
    },

    // created(){
    //   this.quantityOfTheSame()
    // }
  }
</script>

<style lang="sass" scoped>

</style>