<script lang="ts" setup>
import { useLanisteStore } from '../stores/laniste'

const userInfos = useLanisteStore()
defineProps({
  idLudi: {
    type: Number,
    required: true,
  },
})

const success = ref()
const errorFetch = ref()
const name = ref('')
// const createGladiator = async (idludi: number) => {
//   try {
//     await fetch('http://localhost:3000/gladiateurs', {
//       method: 'POST',
//       body: JSON.stringify({
//         nom: name.value,
//         adresse: setLevelRandom(),
//         force: setLevelRandom(),
//         equilibre: setLevelRandom(),
//         vitesse: setLevelRandom(),
//         strategie: setLevelRandom(),
//         ludiId: idludi,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }).then((response) => {
//       if (!response.ok) {
//         errorFetch.value = response.status
//       } else {
//         userInfos.deniers -= 5
//         success.value = true
//       }
//     })
//   } catch (error) {
//     errorFetch.value = error
//   }
// }
const doCreateGladiator = async (idludi: number) => {
  try {
    await userInfos.createGladiator(name.value, idludi)
    userInfos.deniers -= 5
  } catch (err) {
    errorFetch.value = err
  }
}
</script>
<template>
  <div class="bg-white rounded-md shadow-2xl p-5 w-full">
    <div v-if="success">
      <div
        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">GG !</span> Accouchement du gladiateur réussi
        !
      </div>
    </div>
    <div class="flex items-center flex-col border-2 mb-8 py-2 px-3 rounded-2xl">
      <div class="flex items-center mr-4">
        <p class="font-medium">Il est temps de tester ta chance</p>
      </div>
      {{}}
      <div class="flex items-center mr-4">
        <label for="name">Choisir le nom du gladiateur :</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          class="pl-2 w-full border-none text-red-600 bg-gray-100 rounded border-gray-300"
        />
      </div>
      <button
        @click="doCreateGladiator(idLudi)"
        class="block w-full bg-red-500 mt-5 py-2 px-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
      >
        Donner naissance à un Gladiateur
      </button>
    </div>
  </div>
</template>
