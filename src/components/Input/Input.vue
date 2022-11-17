<script>
export default {
  props: {
    label: String,
  },
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input />
  </div>
</template>

<style lang="scss" scoped src="./style.scss" />