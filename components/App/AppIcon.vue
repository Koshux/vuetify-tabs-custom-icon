<template>
  <LazyFontAwesome v-if="lazy" :icon="icon" :size="size" />
  <FontAwesome v-else :icon="icon" :size="size" />
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: Array as PropType<string[]>,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
  },
  lazy: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  console.log('waddup')
})
</script>

<style scoped></style>
