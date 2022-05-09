<script lang="ts" setup>
const route = useRoute()
const valueId = ref()
valueId.value = route.params
console.log(valueId.value.id)
</script>
<template>{{ valueId.id }}</template>
