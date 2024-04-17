<template >
  <font-awesome-icon v-for="n in rating" :icon="['fas', 'star']" />
  <font-awesome-icon v-for="n in 5-rating" :icon="['far', 'star']" /> 
</template>

<script>
  export default {
    props:{
      voteAverage: Number,
    },

    data(){
      return{
        rating: 0,
      }
    },

    methods:{

      quantityOfTheSame(){
        this.rating = Math.round(this.voteAverage / 2);
      }
    },

    created(){
      this.quantityOfTheSame()
    }
  }
</script>

<style lang="sass" scoped>

</style>