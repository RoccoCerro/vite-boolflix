<template>
  <div class="card">
    <div class="card-img">

    </div>
    <ul class="card-description">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      movie: Object,
    }
  }
</script>

<style lang="scss" scoped>

</style>