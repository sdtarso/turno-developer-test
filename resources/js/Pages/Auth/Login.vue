<script setup lang="ts">
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps<{
  canResetPassword?: boolean;
  status?: string;
}>();

const form = useForm({
  email: "",
  password: "",
  remember: false,
});

const submit = () => {
  form.post(route("login"), {
    onFinish: () => {
      form.reset("password");
    },
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div class="px-4 mb-6">
        <TextInput
          id="email"
          type="email"
          class="block w-full"
          v-model="form.email"
          required
          autofocus
          autocomplete="email"
          placeholder="email"
        />
        <InputError class="mt-2" :message="form.errors.email" />
      </div>

      <div class="px-4 mb-14">
        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="current-password"
          placeholder="password"
        />

        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mb-16">
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
          block
        >
          SIGN IN
        </PrimaryButton>
      </div>
      <div class="text-center">
        <Link class="text-primary font-medium" :href="route('register')">
          <small>Doesn't have an account?</small>
        </Link>
      </div>
    </form>
  </GuestLayout>
</template>
