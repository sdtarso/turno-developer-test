<script setup lang="ts">
import DrawerHeader from "@/Components/molecules/DrawerHeader.vue";
import DrawerBody from "@/Components/molecules/DrawerBody.vue";

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="drawer-wrapper">
    <div
      :class="[
        'flex',
        'flex-col',
        'bg-white',
        'w-full',
        'max-w-xs',
        'h-full',
        'overflow-auto',
        'fixed',
        'transition-all',
        'z-50',
        'left-0',
        'inset-y-0',
        {
          'translate-x-0': props.isOpen,
          '-translate-x-full': !props.isOpen,
        },
      ]"
      role="dialog"
    >
      <DrawerHeader @close="emit('close')" />
      <DrawerBody @close="emit('close')" />
    </div>
    <div
      :class="[
        'transition-all',
        'bg-neutral-900/50',
        'w-full h-full',
        'fixed inset-0',
        {
          'visible opacity-100 z-40 pointer-events-auto': props.isOpen,
          'invisible opacity-0 z-0 pointer-events-none': !props.isOpen,
        },
      ]"
      @click="emit('close')"
    ></div>
  </div>
</template>
