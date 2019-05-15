<template>
  <div class="layout">
    <!-- <page-transition/> -->
    <v-header/>
    <main>
      <nuxt/>
    </main>
  </div>
</template>
<script>
import Header from "components/molecules/header.vue";

export default {
  components: {
    "v-header": Header
  }
};
</script>


