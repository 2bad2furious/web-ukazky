<script setup lang="ts">

import {PropType} from "vue";
import {LANG} from "./lang";

// TODO listen to clicks

const props = defineProps({
  source: {
    type: String as PropType<string>,
    required: true
  },
  langs: {
    type: Array as PropType<Array<LANG>>
  },
  height: {
    type: Object,
    default: 350
  }
});

</script>

<template>
  <iframe width="100%" :height="height"
          v-bind:src="'https://jsfiddle.net/' + source + '/embedded/' + (computedLangs.join(','))"
          allowpaymentrequest allowfullscreen="allowfullscreen" ref="frame" class="flex-grow">
  </iframe>
</template>

<script lang="ts">
  import {LANG} from "./lang";

  export default {
    computed: {
        computedLangs(): LANG[]{
          console.debug(this);
          return this.langs ?? this.$slidev.configs.defaultFiddleLangs ?? ['html', 'css', 'js', 'result'];
        },
    }
  }
</script>
