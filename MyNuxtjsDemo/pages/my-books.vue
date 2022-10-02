<template>
  <div>
    <!--{{ myBooks }}-->
    <MyBookItem
      v-for="carBook in myBooks"
      :key="carBook.id"
      :carBook="carBook"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(['myBooks'])
  }
}
</script>
