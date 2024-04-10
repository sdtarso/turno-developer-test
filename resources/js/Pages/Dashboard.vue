<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import AccountBalance from "@/Components/molecules/AccountBalance.vue";
import EntrySummary from "@/Components/molecules/EntrySummary.vue";
import Transactions from "@/Components/organisms/Transactions.vue";

const data = [
  {
    label: "t-shirt",
    value: -40,
    date: new Date(),
  },
  {
    label: "Freelance",
    value: 3200,
    date: new Date(),
  },
  {
    label: "Grandma's gift",
    value: 300,
    date: new Date(),
  },
  {
    label: "Groceries",
    value: -250,
    date: new Date(),
  },
  {
    label: "t-shirt",
    value: -40,
    date: new Date(),
  },
  {
    label: "Freelance",
    value: 3200,
    date: new Date(),
  },
  {
    label: "Grandma's gift",
    value: 300,
    date: new Date(),
  },
  {
    label: "Groceries",
    value: -250,
    date: new Date(),
  },
];
</script>

<template>
  <Head title="Balance" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-white text-center text-xl mb-6">BNB Bank</h2>
      <AccountBalance />
    </template>
    <EntrySummary label="Incomes" action="DEPOSIT A CHECK" :value="7100" />
    <EntrySummary
      class="!bg-light mb-6"
      label="Expenses"
      action="PURCHASE"
      :value="780"
    />
    <Transactions class="mb-8" :data="data">
      <p class="mb-9">TRANSACTIONS</p>
    </Transactions>
  </AuthenticatedLayout>
</template>
