<template>
  <div>
    Hi car detail: {{ $route.params.id }}
    <v-btn id="bookItem" @click="() => { addItem($route.params.id) }">Order</v-btn>
    <v-btn color="rgb(0, 112, 141)" to="/my-books">My books</v-btn>
  </div>

</template>

<script>
import { mapMutations } from "vuex"
export default {
  methods: {
    ...mapMutations(['addItem']),
  }
}
</script>

<style scoped>
</style>
