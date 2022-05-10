<script lang="ts" setup>
import { useLanisteStore } from '../../stores/laniste'
const route = useRoute()
const userInfos = useLanisteStore()

const ludiInfo = ref(userInfos.ludi)
const getInfoLudi = () => {
  const d = userInfos.laniste.ludis.find(
    (x) => x.id.toString() === route.params.id
  )
  if (d) {
    ludiInfo.value = d
  }
}
const doTrainGladiateur = (idGladiateur: number, typeOfTraining: string) => {
  userInfos.Train(ludiInfo.value.specialite, typeOfTraining, idGladiateur)
}

onMounted(() => {
  getInfoLudi()
  console.log(ludiInfo.value)
})
</script>
<template>
  <div class="flex flex-col m-10 text-center">
    <p>Laniste : {{ userInfos.laniste.laniste }}</p>
    <p>Deniers restants : {{ userInfos.deniers }}</p>
    <p>Ludi : {{ ludiInfo.nom }}</p>
    <p>Specialité du ludi : {{ ludiInfo.specialite }}</p>
    <p>Nombre de gladiateurs : {{ userInfos.laniste.gladiateurs.length }}</p>
    <p>Liste des Gladiateurs :</p>
    <div v-for="g in userInfos.laniste.gladiateurs">
      <p><span class="text-red-500 font-medium">Nom : </span>{{ g.nom }}</p>
      <p><span class="text-red-500 font-medium">ADR :</span> {{ g.adresse }}</p>
      <p><span class="text-red-500 font-medium">EQ :</span>{{ g.equilibre }}</p>
      <p><span class="text-red-500 font-medium">FOR :</span>{{ g.force }}</p>
      <p>
        <span class="text-red-500 font-medium">STG :</span>{{ g.strategie }}
      </p>
      <p><span class="text-red-500 font-medium">VIT :</span>{{ g.vitesse }}</p>
      <button
        @click="doTrainGladiateur(g.id, 'physique')"
        class="bg-red-600 text-white mr-4 px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300"
      >
        Entrainement Physique
      </button>
      <button
        @click="doTrainGladiateur(g.id, 'tactique')"
        class="bg-red-500 text-white px-4 py-2 mr-4 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300"
      >
        Entrainement Tactique
      </button>
      <button
        @click="doTrainGladiateur(g.id, 'combine')"
        class="bg-red-400 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300"
      >
        Entrainement Combiné
      </button>
      <div class="border my-5"></div>
    </div>
    <br />
    <div>
      <p>
        Vous pouvez encore recuter
        {{ 10 - userInfos.laniste.gladiateurs.length }}
        Gladiateurs
      </p>
      <button
        class="border-2 border-red-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
      >
        Recruter un gladiateur
      </button>
    </div>
  </div>
</template>
