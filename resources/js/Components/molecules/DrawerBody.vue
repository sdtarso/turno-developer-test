<script setup lang="ts">
import { Link } from "@inertiajs/vue3";

export interface IDrawerLink {
  icon: string;
  link: string;
  label: string;
}
const items: IDrawerLink[] = [
  {
    icon: "fa-balance-scale-right",
    label: "balance",
    link: route("home"),
  },
  {
    icon: "fa-level-up-alt",
    label: "income",
    link: "#income",
  },
  {
    icon: "fa-level-down-alt",
    label: "expenses",
    link: "#expenses",
  },
  {
    icon: "fa-money-check-alt",
    label: "checks",
    link: "#checks",
  },
  {
    icon: "fa-bell",
    label: "notifications",
    link: "#notifications",
  },
  {
    icon: "fa-user-alt",
    label: "profile",
    link: "#profile",
  },
  {
    icon: "fa-cog",
    label: "settings",
    link: "#settings",
  },
  {
    icon: "fa-question-circle",
    label: "help",
    link: "#help",
  },
];
const emit = defineEmits(["close"]);
</script>

<template>
  <div className="flex-grow bg-primary">
    <nav>
      <ul className="flex flex-col">
        <li
          :key="key"
          v-for="({ icon, link, label }, key) in items"
          className="block w-full font-medium"
        >
          <Link
            class="flex items-center p-4 gap-4 transition-colors hover:bg-black/25"
            :href="link"
            @click="emit('close')"
          >
            <VIcon class="w-7 h-7 text-primary-400" :name="icon" />
            <span class="text-white font-bold uppercase text-xs">
              {{ label }}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</template>
