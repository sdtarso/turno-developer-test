<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
const { href = "#" } = defineProps<{ href: string }>();
</script>

<template>
  <div className="fixed right-8 bottom-8">
    <Link
      :href="href"
      class="block bg-primary p-1 w-10 h-10 rounded-full text-white"
    >
      <VIcon class="w-8 h-8" name="fa-plus" />
    </Link>
  </div>
</template>
