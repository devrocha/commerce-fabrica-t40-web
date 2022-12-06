<script>
export default {
  props: {
    label: String,
    variant: String,
    type: String,
    modelValue: String,
  },
};
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field
      :variant="variant"
      :type="type"
    />
  </div>
</template>