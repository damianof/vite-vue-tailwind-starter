<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <div class="text-base text-slate-300 space-y-6">
    <section class="flex space-x-4">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="w-8 h-8" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="w-8 h-8" alt="Vue logo" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="/tailwindcss.svg" class="w-8 h-8" alt="Tailwind CSS logo" />
      </a>
    </section>

    <h1 class="font-bold text-lg">{{ msg }}</h1>

    <div class="space-y-2">
      <button
        type="button"
        class="bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-300 text-white font-semibold h-8 px-4 rounded-md w-full flex items-center justify-center sm:w-auto transition-colors duration-300"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p>Edit <code>components/HelloWorld.vue</code> to test HMR</p>
    </div>
  </div>
</template>
