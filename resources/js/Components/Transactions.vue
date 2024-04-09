<script setup lang="ts">
import Container from "@/Components/Container.vue";
import TransationItem, { ITransactionItem } from "./TransactionItem.vue";

const data: ITransactionItem[] = [
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
  <Container>
    <p class="mb-9">TRANSACTIONS</p>
    <TransationItem v-for="(item, key) in data" :key="key" v-bind="item" />
  </Container>
</template>
