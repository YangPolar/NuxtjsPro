<template>
  <div>
    <h2 class="header">
      {{ carSection.title }}
    </h2>
    <p class="snippet">
      {{ carSection.snippet }}
    </p>
    <div class="cars-container">
      <CarCol
        v-for="car in carSection.cars"
        :key="car.id"
        :car="car"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['carSection']
}
</script>

<style scoped>
  .header {
    margin-top: 0.4rem;
  }
  .snippet {
    color: grey;
    margin-bottom: 1.5rem;
  }
  .cars-container {
    display: flex;
    justify-content: space-between;
  }
</style>
