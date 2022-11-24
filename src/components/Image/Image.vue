<script>
export default {
  props: {
    source: String,
    alt: String,
  },
};
</script>

<template>
  <img :src="source" :alt="alt" />
</template>