<template>
  <header class="header">
    <h1 class="header__title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Draw.io :)',
    };
  },
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background: #EEE;
  }

  .header__title {
    text-transform: uppercase;
  }
</style>
