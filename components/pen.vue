<template>
  <iframe :height="height" style="width: 100%;" scrolling="no" ref="frame"
          :src="url" frameborder="no" :loading="loading" class="flex-grow"
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
    clickToLoad: {
      type: Boolean,
      default: false
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
    },
    height: {
      type: Object,
      default: 350
    },
    loading: {
      type: String as PropType<'eager' | 'lazy'>,
      default: 'eager'
    }
  },
  data() {
    const checkIsDarkTheme = () => document.documentElement.classList.contains('dark');
    const mutationObserver = new MutationObserver(e => {
      const isDarkTheme = checkIsDarkTheme();
      if(isDarkTheme !== this.isDarkTheme){
        this.isDarkTheme = isDarkTheme;
      }
    });
    mutationObserver.observe(document.documentElement, {attributeFilter: ['class']});
    return {
      isDarkTheme: checkIsDarkTheme(),
      mutationObserver
    }
  },
  unmounted() {
    this.mutationObserver.disconnect();
  },
  inject: {
    "$slidev": slidevContext
  },
  computed: {
    calculatedTheme(): string | 'default' {
      if (this.theme) {
        return this.theme;
      }
      if (this.isDarkTheme)
        return 'dark';
      return 'light';
    },
    url(): string {
      return 'https://codepen.io/' + this.author + '/embed/' + (this.clickToLoad ? 'preview/' : '') + this.name + '?' + this.queryParams;
    },
    globalDefaultLang(): string {
      return this.$slidev.configs.penDefaultLang;
    },
    queryParams(): string {
      // default-tab=html%2Cresult&editable=true&theme-id=light'
      const qp = new URLSearchParams();
      qp.append('default-tab', this.defaultLang ?? this.globalDefaultLang);
      qp.append('editable', this.editable ? 'true' : 'false');
      const calculatedTheme = this.calculatedTheme;
      if (calculatedTheme !== 'default')
        qp.append('theme-id', calculatedTheme);
      return qp.toString();
    }
  }
}
</script>
