<template>
  <img :src="source" :alt="alt" />
</template>

<script>
export default {
  props: {
    source: String,
    alt: String,
  },
};
</script>

<style  src="./style.scss" scoped lang="scss">
</style>