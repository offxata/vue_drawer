<template>
  <div class="container">
    <app-header></app-header>
    <main class="main">
    <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: 'layout',
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    max-width: 980px;
    margin: 20px auto;
  }
</style>
