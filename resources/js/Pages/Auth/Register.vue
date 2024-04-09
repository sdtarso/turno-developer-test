<script setup lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
  username: "",
  email: "",
  password: "",
});

const submit = () => {
  form.post(route("register"), {
    onFinish: () => {
      form.reset("password");
    },
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Register" />

    <form @submit.prevent="submit">
      <div class="px-4 mb-6">
        <TextInput
          id="username"
          type="text"
          class="mt-1 block w-full"
          v-model="form.username"
          required
          autofocus
          autocomplete="username"
          placeholder="username"
        />

        <InputError class="mt-2" :message="form.errors.username" />
      </div>

      <div class="px-4 mb-6">
        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
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
          autocomplete="new-password"
          placeholder="password"
        />

        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mb-14">
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
          block
        >
          SIGN UP
        </PrimaryButton>
      </div>
      <div class="text-center">
        <div class="text-center">
          <Link class="text-primary font-medium" :href="route('login')">
            <small>Already have an account?</small>
          </Link>
        </div>
      </div>
    </form>
  </GuestLayout>
</template>
