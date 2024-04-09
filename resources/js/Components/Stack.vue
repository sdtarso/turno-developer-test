<script setup lang="ts">
const { type } = withDefaults(
  defineProps<{ type: "vertical" | "horizontal" }>(),
  { type: "horizontal" }
);
</script>

<template>
  <div
    class="flex items-end justify-between"
    :class="{ 'flex-col': type === 'vertical' }"
  >
    <slot />
  </div>
</template>
