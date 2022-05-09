<script lang="ts" setup>
const { t } = useI18n()
</script>
<template>
  <div class="bg-white rounded-md shadow-2xl p-5 w-full">
    <h1 class="text-gray-800 font-bold text-2xl mb-1">
      {{ t('Home_Page.Welcome') }}
    </h1>
    <div class="flex items-center flex-col border-2 mb-8 py-2 px-3 rounded-2xl">
      <div class="flex items-center mr-4">
        <p>Il est temps de tester ta chance</p>
      </div>
      <div class="flex items-center mr-4">
        <button
          class="block w-full bg-red-500 mt-5 py-2 px-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
        >
          Donner naissance à un Gladiateur
        </button>
      </div>
    </div>
  </div>
</template>
