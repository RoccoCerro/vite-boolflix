<template >
  <div v-htlm="fullStar"></div>  
</template>

<script>
  export default {
    props:{
      voteAverage: Number,
    },

    data(){
      return{
        fullStar:"",
        rating: null,
      }
    },

    methods:{
      quantityOfTheSame(){
        this.rating = Math.round(this.voteAverage / 2);
        console.log("rating",this.rating)
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

<style lang="sass" scoped>

</style>