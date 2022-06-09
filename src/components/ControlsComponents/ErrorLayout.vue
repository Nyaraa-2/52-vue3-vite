<script lang="ts" setup>
const { t } = useI18n()

defineProps({
  error: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div
    v-if="error"
    class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
    role="alert"
  >
    <p class="font-bold">{{ t('Error.homePage') }}</p>
    <p>{{ error }}</p>
    <p></p>
  </div>
</template>
