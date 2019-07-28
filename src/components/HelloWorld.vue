<template><v-app>

  <header-component />

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>

    </v-container>

  </v-content>

  <v-footer>
    <!-- -->
  </v-footer>

</v-app></template>

<script>
export default {
  components: {
    'header-component': () => import('./Header')
  },
  data () {
    return {

    }
  }
}
</script>
