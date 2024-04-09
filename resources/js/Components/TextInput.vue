<script setup lang="ts">
import { onMounted, ref } from "vue";

const model = defineModel<string>({ required: true });

const input = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (input.value?.hasAttribute("autofocus")) {
    input.value?.focus();
  }
});

defineExpose({ focus: () => input.value?.focus() });
</script>

<template>
  <input
    class="px-8 py-4 text-primary placeholder-primary-400 border-2 border-primary-400 focus:border-primary focus:ring-primary rounded-full"
    v-model="model"
    ref="input"
  />
</template>
