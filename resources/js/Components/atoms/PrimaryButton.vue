<script setup lang="ts">
const { block } = defineProps<{ block?: boolean }>();
</script>

<template>
  <button
    class="flex items-center p-4 bg-primary border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-primary-400 focus:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
    :class="{ 'w-full justify-center': block }"
  >
    <slot />
  </button>
</template>
