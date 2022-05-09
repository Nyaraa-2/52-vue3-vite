<script lang="ts" setup>
const { t } = useI18n()
const emit = defineEmits(['ludi'])
const ludiChosen = async () => {
  emit('ludi', ludiSelected.value, nameLudi.value)
}

const courseDeChar = ref('COURSE_DE_CHAR')
const athletisme = ref('ATHLETISME')
const lutte = ref('LUTTE')
const ludiSelected = ref([])
const nameLudi = ref('')

const isLudiAlreadySelected = computed(() => {
  if (ludiSelected.value.length == 1) {
    return true
  }
})
</script>
<template>
  <div class="bg-white rounded-md shadow-2xl p-5 w-full">
    <h1 class="text-gray-800 font-bold text-2xl mb-1 text-center">
      <label for="name">Choisir le nom de Ludi : </label>
      <input
        id="name"
        type="text"
        v-model="nameLudi"
        class="w-1/2 h-8 text-red-600 bg-gray-300 rounded border-gray-800 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-red-700 dark:border-gray-900"
      />
    </h1>
    <div
      class="flex items-center justify-center border-2 mb-8 py-2 px-3 rounded-2xl"
    >
      <div class="flex items-center mr-4">Choisir le type de Ludi :</div>
      <div class="flex items-center mr-4">
        <input
          id="inline-checkbox"
          type="checkbox"
          :value="courseDeChar"
          v-model="ludiSelected"
          :disabled="isLudiAlreadySelected"
          class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="inline-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ t('Home_Page.course') }}</label
        >
      </div>
      <div class="flex items-center mr-4">
        <input
          id="inline-checked-checkbox"
          type="checkbox"
          :value="athletisme"
          v-model="ludiSelected"
          :disabled="isLudiAlreadySelected"
          class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="inline-checked-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ t('Home_Page.athletisme') }}</label
        >
      </div>
      <div class="flex items-center mr-4">
        <input
          id="inline-2-checkbox"
          type="checkbox"
          :value="lutte"
          v-model="ludiSelected"
          :disabled="isLudiAlreadySelected"
          class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="inline-2-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ t('Home_Page.lutte') }}</label
        >
      </div>
    </div>

    <button
      type="submit"
      @click="ludiSelected.splice(0, 1)"
      class="m-auto block w-1/3 bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
    >
      Modifier le type de Ludi
    </button>
    <button
      type="submit"
      @click="ludiChosen()"
      class="m-auto block w-1/3 bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
    >
      Valider
    </button>
  </div>
</template>
