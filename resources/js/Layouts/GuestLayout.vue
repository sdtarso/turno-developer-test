<script setup lang="ts">
import ApplicationLogo from "@/Components/atoms/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <div class="bg-primary w-full pt-36 pb-8 mb-14">
      <Link class="text-center" href="/">
        <ApplicationLogo />
      </Link>
    </div>

    <div class="w-full px-8 bg-white">
      <slot />
    </div>
  </div>
</template>
