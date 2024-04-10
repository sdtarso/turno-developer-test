<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import AccountBalance from "@/Components/molecules/AccountBalance.vue";
import EntrySummary from "@/Components/molecules/EntrySummary.vue";
import Transactions from "@/Components/organisms/Transactions.vue";
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
    <Transactions class="mb-8" />
  </AuthenticatedLayout>
</template>
