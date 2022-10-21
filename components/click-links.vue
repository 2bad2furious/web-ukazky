<template>
  <div class="inline-flex gap-2">
    <click-link v-for="link in to" :to="link[0]">{{link[1]}}</click-link>
  </div>
</template>

<script lang="ts">

import {PropType} from "vue";

export default {
  name: "click-links",
  props: {
    to: Array as PropType<[[number, string]]>
  }
}
</script>

<style scoped>

</style>