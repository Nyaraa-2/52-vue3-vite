<script lang="ts" setup>
import { getGlads } from '@/services/fakeApi'
import Gladiator from '@/components/Gladiator.vue'
export interface Gladiator {
  id: string
  nom: string
  adresse: number
  force: number
  equilibre: number
  vitesse: string
  strategie: string
  url_image: string
  ludiId: number
}
const gladiators = ref(<Array<Gladiator>>[])
const error = ref()
onMounted(async () => {
  try {
    gladiators.value = await getGlads()
  } catch (e) {
    error.value = e
  }
})
const choose = true
</script>
<template>
  <div v-if="choose">
    <div
      class="h-screen lg:flex w-full lg:w-1/2 <sm:flex-col w-full justify-center justify-around py-12 px-6"
    >
      <div v-for="glad in gladiators" :key="glad.id">
        <Gladiator :gladiator="glad" />
      </div>
    </div>
  </div>
  <div v-if="choose">
    <div
      class="h-screen lg:flex w-full lg:w-1/2 <sm:flex-col w-full justify-center justify-around py-12 px-6"
    >
      <div v-for="glad in gladiators" :key="glad.id">
        <Gladiator :gladiator="glad" />
      </div>
    </div>
  </div>
</template>
