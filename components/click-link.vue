<template>
  <a :href="url" v-on:click="click" :class="active && activeClasses">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import {SlidevContext} from '@slidev/client/modules/context';
import {injectionSlidevContext} from '@slidev/client/constants';

export default {
  name: "click-link",
  props: {
    to: Number
  },
  computed: {
    activeClasses() {
      return `!border-solid`
    },
    active() {
      return this.slidev.nav.clicks === this.to;
    },
    slidev(): SlidevContext {
      return this.$.provides[injectionSlidevContext];
    },
    url() {
      // TODO provide real url
      return `#`;
    }
  },
  methods: {
    click(e: MouseEvent) {
      e.preventDefault();
      this.slidev.nav.clicks = this.to;
    }
  }
}
</script>