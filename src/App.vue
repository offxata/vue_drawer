<template>
  <app-layout>
    <app-draw></app-draw>
  </app-layout>
</template>

<script>
import Layout from './components/layouts/Layout.vue';
import Draw from '@/pages/Draw.vue';

export default {
  name: 'app',
  components: {
    appLayout: Layout,
    appDraw: Draw,
  },
};
</script>
