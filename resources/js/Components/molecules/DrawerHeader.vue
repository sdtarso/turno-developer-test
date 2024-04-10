<script setup lang="ts">
import ApplicationLogo from "@/Components/atoms/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>
<template>
  <div className="px-5 py-7 flex items-center justify-between bg-primary-400">
    <Link class="text-center" href="/">
      <ApplicationLogo class="!font-medium" />
    </Link>
  </div>
</template>
