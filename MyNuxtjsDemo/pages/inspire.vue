<template>
  <v-row>
    <v-col class="text-center">
      <v-img v-bind:src="require('/assets/images/kinto_logo.svg')"></v-img>
      <blockquote class="blockquote">
        &#8220;{{ contact.text }} {{ data }}.&#8221;
        <footer>
          <small>
            <em>&mdash;{{ contact.name }}</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
  <!--
    if we don't use error.vue we can:
    <div v-if="contact" class="container py-5"></div>
    <div v-else class="container padding"><PageNotFound /></div>
  -->
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState([
      'data'
    ]),
    contact () {
      // if the id doesn't exist, go to error.vue
      return this.$store.getters.getContactId(1)
    }
  },
  name: 'InspirePage'
}
</script>
