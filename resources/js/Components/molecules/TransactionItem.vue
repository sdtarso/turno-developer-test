<script setup lang="ts">
import Stack from "@/Components/atoms/Stack.vue";
import { currencyFormatter, dateFormatter } from "@/utils";
import { computed } from "vue";

export interface ITransactionItem {
  label: string;
  value: number;
  date: Date;
}

const { label, value, date } = defineProps<ITransactionItem>();

const formattedValue = computed({
  get() {
    return currencyFormatter.format(value);
  },
  set() {},
});

const formattedDate = computed({
  get() {
    return dateFormatter.format(date);
  },
  set() {},
});
</script>

<template>
  <Stack class="mb-3 pb-5 border-b last:border-b-0 border-primary-300">
    <div>
      <b class="text-sm">{{ label }}</b>
      <p class="text-sm">{{ formattedDate }}</p>
    </div>
    <div :class="{ 'text-red': value < 0 }">
      {{ formattedValue }}
    </div>
  </Stack>
</template>
