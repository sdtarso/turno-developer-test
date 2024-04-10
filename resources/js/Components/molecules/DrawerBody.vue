<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

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
    link: route("expenses"),
  },
  {
    icon: "fa-money-check-alt",
    label: "checks",
    link: route("checks"),
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
    <nav class="h-full">
      <ul className="h-full flex flex-col">
        <li
          :key="key"
          v-for="({ icon, link, label }, key) in items"
          className="block w-full"
        >
          <Link
            class="flex items-center p-4 gap-4 border-solid border-l-4 border-transparent transition-colors hover:bg-black/25"
            :class="{ '!border-primary-400': link.endsWith($page.url) }"
            :href="link"
            @click="emit('close')"
          >
            <VIcon class="w-7 h-7 text-primary-400" :name="icon" />
            <span class="text-white font-bold uppercase text-xs">
              {{ label }}
            </span>
          </Link>
        </li>
        <li className="block w-full mt-auto">
          <a
            class="flex items-center p-4 gap-4 transition-colors hover:bg-black/25"
            href="https://github.com/sdtarso/turno-developer-test"
            target="_blank"
          >
            <VIcon class="w-7 h-7 text-primary-400" name="fa-github" />
            <span
              class="inline-flex items-center gap-1 text-white font-bold uppercase text-xs"
            >
              View on github
              <VIcon name="fa-external-link-alt" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
