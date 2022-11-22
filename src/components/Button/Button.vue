<script>
export default {
  props: {
    label: String,
    color: String,
    variant: String
  },
};
</script>

<template>
  <div>
    <v-btn :color="color" :variant="variant">
      <span>{{ label }}</span>
    </v-btn>
  </div>
</template>