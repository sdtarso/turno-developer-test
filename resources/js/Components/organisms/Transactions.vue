<script setup lang="ts">
import Container from "@/Components/atoms/Container.vue";
import TransationItem, {
  ITransactionItem,
} from "@/Components/molecules/TransactionItem.vue";

const { data = [] } = defineProps<{ data: ITransactionItem[] }>()
</script>

<template>
  <Container>
    <slot />
    <TransationItem v-for="(item, key) in data" :key="key" v-bind="item" />
  </Container>
</template>
