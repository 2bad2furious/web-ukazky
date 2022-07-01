<template>
  <iframe :height="height" style="width: 100%;" scrolling="no"
          :src="'https://codepen.io/' + author + '/embed/' + name + '?' + queryParams" frameborder="no" loading="lazy"
          allowtransparency="true" allowfullscreen="true">
    See the Pen <a :href="'https://codepen.io/'  + author + '/pen/' + name">Here</a>
  </iframe>
</template>

<script lang="ts">
import {PropType} from "vue";
import {injectionSlidevContext as slidevContext} from "@slidev/client/constants";
import {CODEPEN_LANG} from "./lang";

export default {
  name: "pen",
  props: {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: '2bad2furious'
    },
    editable: {
      type: Boolean,
      default: true
    },
    defaultLang: {
      type: String as PropType<Array<CODEPEN_LANG>>
    },
    theme: {
      type: String,
      default: 'default'
    },
    height: {
      type: Object,
      default: 350
    }
  },
  inject: {
    "$slidev": {
      from: slidevContext
    }
  },
  computed: {
    globalDefaultLang(): string {
      return this.$slidev.configs.penDefaultLang;
    },
    queryParams(): string {
      // default-tab=html%2Cresult&editable=true&theme-id=light'
      const qp = new URLSearchParams();
      qp.append('default-tab', (this.defaultLang ?? this.globalDefaultLang) + ',result');
      qp.append('editable', this.editable ? 'true' : 'false');
      if (this.theme !== 'default')
        qp.append('theme-id', this.theme);
      return qp.toString();
    }
  }
}
</script>
