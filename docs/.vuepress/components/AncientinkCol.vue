<template>
  <div class="aui-col" :style="{ width: span * 4.166 + '%' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AncientinkCol",
  props: {
    span: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style>
</style>