<script lang="ts" setup>
const { t } = useI18n()
const pseudo = ref('')
const emit = defineEmits(['pseudo'])

const getPseudo = () => {
  emit('pseudo', pseudo.value)
}
</script>
<template>
  <div class="bg-white rounded-md shadow-2xl p-5">
    <h1 class="text-gray-800 font-bold text-2xl mb-1">
      {{ t('Home_Page.Welcome') }}
    </h1>
    <div class="flex items-center">
      <label for="pseudo">Pseudo :</label>
      <br />
    </div>
    <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
      <input
        id="pseudo"
        class="pl-2 w-full outline-none border-none"
        type="text"
        name="pseudo"
        v-model="pseudo"
      />
    </div>
    <button
      type="submit"
      @click="getPseudo()"
      class="block w-full bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
    >
      Suivant
    </button>
  </div>
</template>
