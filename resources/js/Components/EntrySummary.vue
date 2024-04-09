<script setup lang="ts">
import Container from "@/Components/Container.vue";
import Stack from "@/Components/Stack.vue";
import { currencyFormatter } from "@/utils";
import { computed } from "vue";

interface IProps {
  label: string;
  value: number;
  action: string;
}

const { label, value, action } = defineProps<IProps>();

const formattedValue = computed({
  get() {
    return currencyFormatter.format(value);
  },
  set() {},
});
</script>

<template>
  <div class="bg-primary-300 pt-6 pb-4">
    <Container>
      <Stack class="items-center">
        <div>
          <p class="font-bold text-xs mb-1">{{ label }}</p>
          <p class="text-xl">{{ formattedValue }}</p>
        </div>
        <div class="text-center w-28">
          <VIcon class="w-7 h-7" name="co-plus" />
          <p class="text-xs">{{ action }}</p>
        </div>
      </Stack>
    </Container>
  </div>
</template>
