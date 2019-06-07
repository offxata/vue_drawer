<template>
  <button
    :type="buttonType"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      default: 'button',
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
