<template>
  <div class="car">
    <!--<img class="image" :src="require(`@/assets/images/${car.image || 'lineup_raize.png'}`)" alt="">-->
    <v-img v-bind:src="require(`@/assets/images/${car.image || 'lineup_raize.png'}`)"></v-img>
    <h6 class="header">
      {{ car.title }}
    </h6>
    <p class="snippet">
      {{ car.snippet }}<br />
      月額{{ car.price }}~円
    </p>
  </div>
</template>

<script>
export default {
  props: ['car']
}
</script>

<style scoped>
  .car {
    width: 31.5%;
    height: 25rem;
    border: none;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
  }
  .image {
    height: 65%;
    border-radius: 0.5rem;
  }
  .header {
    font-size: 1.15rem;
    margin-top: 0.4rem;
  }
  .snippet {
    color: grey
  }
</style>
