<script setup lang="ts">
import Stack from "@/Components/atoms/Stack.vue";
import DatePicker from "@/Components/atoms/DatePicker.vue";
</script>

<template>
  <Stack class="col-span-3 bg-primary-400 text-white">
    <div>
      <p class="font-bold text-sm mb-1">Current balance</p>
      <p class="text-3xl leading-none">$6320,00</p>
    </div>
    <DatePicker />
  </Stack>
</template>
