<template >
  <span>Voto: </span>
  <font-awesome-icon v-for="n in ratingMath" :icon="['fas', 'star']" />
  <font-awesome-icon v-if="Halfstar()" :icon="['fas', 'star-half-stroke']" />
  <font-awesome-icon v-if="Halfstar()" v-for="n in 4-ratingMath" :icon="['far', 'star']" />
  <font-awesome-icon v-if="!Halfstar()" v-for="n in 5-ratingMath" :icon="['far', 'star']" /> 
</template>

<script>
  export default {
    props:{
      voteAverage: Number,
    },

    data(){
      return{
        ratingMath: 0,
        rating: 0
      }
    },

    methods:{

      quantityOfTheSame(){
        this.rating = this.voteAverage / 2;
        this.ratingMath = parseInt(this.voteAverage / 2)
      },

      Halfstar(){
        if(this.rating - this.ratingMath > 0.5){
          return true
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