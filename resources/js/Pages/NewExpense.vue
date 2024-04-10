<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Container from "@/Components/atoms/Container.vue";
import TextInput from "@/Components/atoms/TextInput.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head title="Expenses" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="text-center font-semibold mb-9">PURCHASE</h2>
      <div class="col-span-3">
        <p class="text-primary-400 font-bold text-xs mb-1 uppercase">
          Current balance
        </p>
        <p class="text-xl font-bold leading-none">$6320,00</p>
      </div>
    </template>
    <div class="pt-8">
      <Container>
        <form @submit.prevent="() => {}">
          <div class="mb-6">
            <label class="flex items-center text-primary-400 text-xs font-bold">
              <VIcon name="fa-money-bill-wave" />
              <span class="ml-3.5">AMOUNT</span>
            </label>
            <TextInput type="number" style-type="material" />
          </div>
          <div class="mb-6">
            <label class="flex items-center text-primary-400 text-xs font-bold">
              <VIcon name="bi-calendar-week" />
              <span class="ml-3.5">DATE</span>
            </label>
            <TextInput type="date" style-type="material" />
          </div>
          <div>
            <label class="flex items-center text-primary-400 text-xs font-bold">
              <VIcon name="bi-star-fill" />
              <span class="ml-3.5">DESCRIPTION</span>
            </label>
            <TextInput type="text" style-type="material" />
          </div>
        </form>
      </Container>
    </div>
  </AuthenticatedLayout>
</template>
