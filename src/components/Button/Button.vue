<template>
  <div>
    <button :class="type=='outline' ? 'btn' : 'card-btn'">
      <span class="textButton">{{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
  }
};
</script>
<style lang="scss" scoped src="./style.scss" />