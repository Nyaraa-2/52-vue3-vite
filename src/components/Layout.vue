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
          <slot></slot>
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
