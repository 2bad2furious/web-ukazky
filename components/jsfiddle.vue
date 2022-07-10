<script setup lang="ts">

import {PropType} from "vue";
import {FIDDLE_LANG} from "./lang";

// TODO listen to clicks

const props = defineProps({
  source: {
    type: String as PropType<string>,
    required: true
  },
  langs: {
    type: Array as PropType<Array<FIDDLE_LANG>>
  },
  height: {
    type: Object,
    default: 350
  }
});

</script>

<template>
  <iframe width="100%" :height="height"
          v-bind:src="'https://jsfiddle.net/' + source + '/embedded/' + ((langs ?? $slidev.configs.defaultFiddleLangs ?? ['html', 'css', 'js', 'result']).join(','))"
          allowpaymentrequest allowfullscreen="allowfullscreen" ref="frame" class="flex-grow">

  </iframe>
</template>

