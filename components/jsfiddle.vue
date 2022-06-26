<script setup lang="ts">

import {PropType} from "vue";

// TODO allow switching with the v-click stuff

const props = defineProps({
  source: {
    type: String as PropType<string>,
    required: true
  },
  langs: {
    type: Array as PropType<Array<'css' | 'js' | 'result' | 'html'>>
  }
});

</script>

<template>
  <iframe width="100%" height="300"
          v-bind:src="'https://jsfiddle.net/' + source + '/embedded/' + (langs?.join(',') ?? '')"
          allowpaymentrequest allowfullscreen="allowfullscreen" ref="frame">
    <script>console.log("howdy")</script>
  </iframe>
</template>
