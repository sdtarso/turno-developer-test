<script setup lang="ts">
import Container from "@/Components/atoms/Container.vue";
import Drawer from "@/Components/organisms/Drawer.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="min-h-screen bg-white">
      <!-- Page Heading -->
      <header class="bg-primary-400" v-if="$slots.header">
        <Container class="grid grid-cols-header py-6">
          <div>
            <VIcon
              @click="() => (isOpen = true)"
              class="cursor-pointer text-white w-6 h-6"
              name="fa-bars"
            />
            <Drawer :is-open="isOpen" @close="() => (isOpen = false)" />
          </div>
          <slot name="header" />
          <slot name="filter" />
        </Container>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
