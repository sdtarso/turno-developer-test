import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
  ],

  theme: {
    extend: {
      colors: {
        light: "#f1f9fe",
        red: {
          DEFAULT: "#ec4226",
        },
        primary: {
          300: "#daefff",
          400: "#bde0fe",
          DEFAULT: "#2799fb",
        },
      },
    },
  },

  plugins: [forms],
};
