<script setup lang="ts">
import { onMounted, ref } from "vue";

const model = defineModel<string>({ required: true });
const { styleType } = withDefaults(
  defineProps<{ styleType: "default" | "material" }>(),
  {
    styleType: "default",
  }
);

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
    :class="{
      'block w-full px-8 py-4 text-primary border-primary-400 placeholder-primary-400 focus:border-primary': true,
      'border-2 focus:ring-primary rounded-full': styleType === 'default',
      'border-0 border-b-2': styleType === 'material',
    }"
    v-model="model"
    ref="input"
  />
</template>
