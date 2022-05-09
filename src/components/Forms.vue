<script lang="ts" setup>
const errorFetch = ref()
const emit = defineEmits(['registration'])
const email = ref()
const password = ref()

const { t } = useI18n()

const account = () => {
  emit('registration', email.value, password.value)
}
</script>
<template>
  <div class="bg-white rounded-md shadow-2xl p-5">
    <h1 class="text-gray-800 font-bold text-2xl mb-1">
      {{ t('Home_Page.Welcome') }}
    </h1>
    <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
      <label for="email" hidden />
      <input
        id="email"
        class="pl-2 w-full outline-none border-none"
        type="email"
        name="email"
        v-model="email"
        :placeholder="t('Home_Page.form_3')"
      />
    </div>
    <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>
      <input
        class="pl-2 w-full outline-none border-none"
        type="password"
        name="password"
        id="password"
        :placeholder="t('Home_Page.form_4')"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      @click="account()"
      class="block w-full bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
    >
      Suivant
    </button>
  </div>
</template>
