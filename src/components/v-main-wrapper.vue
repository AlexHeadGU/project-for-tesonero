<template>
  <div class="v-main-wrapper">
    <v-header />
    <v-main-section />
  </div>
</template>

<script>
import vHeader from './layouts/v-header'
import vMainSection from './sections/v-main-section'
export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vMainSection
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello I'm alive!");
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  margin: auto;
}
</style>