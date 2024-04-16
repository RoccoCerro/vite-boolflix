<template>
  <div class="content-header">
    <div class="container">
      <div class="row">
        <div class="col">LOGO</div>
        <div class="col">
          <input type="text" placeholder="Inserisci il nome del film">
          <button>Cerca</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/variables';

  .content-header {
    padding: 20px 0;

    .row {
      justify-content: space-between;
    }

    input, button {
      height: 30px;
      border: none;
      border-radius: variables.$radius;
      padding: 0 5px;
    }

    input {
      outline: none;
      margin-right: 10px;
    }
  }
</style>