<script lang="ts" setup>
const { t } = useI18n()

defineProps({
  message: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div
    v-if="message"
    class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    role="alert"
  >
    <span class="font-medium">{{ message }}</span>
  </div>
</template>
