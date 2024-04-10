<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import Transactions from "@/Components/organisms/Transactions.vue";
import FloatingButton from "@/Components/atoms/FloatingButton.vue";
import DatePicker from "@/Components/atoms/DatePicker.vue";
const data = [
  {
    label: "t-shirt",
    value: 40,
    date: new Date(),
  },
  {
    label: "Groceries",
    value: 250,
    date: new Date(),
  },
  {
    label: "t-shirt",
    value: 40,
    date: new Date(),
  },
  {
    label: "Groceries",
    value: 250,
    date: new Date(),
  },
];
</script>

<template>
  <Head title="Expenses" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-center font-semibold mb-9">CHECKS</h2>
      <DatePicker class="col-span-3" />
    </template>
    <Transactions class="mt-8" :data="data" />
    <FloatingButton :href="route('checks.create')" />
  </AuthenticatedLayout>
</template>
