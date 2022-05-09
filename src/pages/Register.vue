<script lang="ts" setup>
const { t } = useI18n()
</script>
<template>
  <div class="h-screen flex">
    <div
      class="flex w-full lg:w-2/3 justify-center items-center bg-white space-y-8"
    >
      <div class="w-full px-8 md:px-32 lg:px-24">
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
            />
          </div>
          <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <label for="nom" hidden />
            <input
              id="name"
              class="pl-2 w-full outline-none border-none"
              type="text"
              name="name"
              :placeholder="t('Home_Page.form_')"
            />
          </div>

          <div class="flex">
            <div class="flex items-center mr-4">
              <label
                for="inline-checked-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Choisi ton Ludi :</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Course de char</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-2-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Lutte</label
              >
            </div>
            <div class="flex items-center mr-4">
              <input
                id="inline-checked-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="inline-checked-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Athlétisme</label
              >
            </div>
          </div>

          <button
            class="block w-full bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            {{ t('Home_Page.form_6') }}
          </button>
          <div class="flex justify-between mt-4">
            <a
              href="#"
              class="text-sm ml-2 hover:text-red-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
              >{{ t('Home_Page.form_5') }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:flex w-full lg:w-1/3 login_img_section justify-around items-center"
    >
      <div class="bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="text-white font-bold text-4xl font-sans">
          {{ t('Home_Page.title') }}
        </h1>
        <p class="text-white mt-1">{{ t('Home_Page.subtitle_registrer') }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://cdna.artstation.com/p/assets/images/images/010/801/346/large/minjun-kim-1511-golem-warrior-champ.jpg?1526313587)
      center center;
}
</style>
