<script setup lang="ts">
  import {PropType} from "vue";
  import {CODEPEN_LANG} from "./lang";

  defineProps({
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
  });
</script>

<template>
  <iframe :height="height" style="width: 100%;" scrolling="no" :src="'https://codepen.io/' + author + '/embed/' + name + '?' + queryParams" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a :href="'https://codepen.io/'  + author + '/pen/' + name">Here</a>
  </iframe>
</template>

<script lang="ts">
export default {
  name: "pen",
  computed: {
    globalDefaultLang(): string {
      console.debug(this);
      return this.$slidev.configs.penDefaultLang;
    },
    queryParams(): string{
    // default-tab=html%2Cresult&editable=true&theme-id=light'
      const qp = new URLSearchParams();
      qp.append('default-tab', (this.defaultLang ?? this.globalDefaultLang) + ',result');
      qp.append('editable', this.editable ? 'true' : 'false');
      if(this.theme !== 'default')
        qp.append('theme-id', this.theme);
      return qp.toString();
    }
  }
}
</script>
