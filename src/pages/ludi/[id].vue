<script lang="ts" setup>
import { useLanisteStore } from '../../stores/laniste'
import CreateGladiator from '@/components/CreateGladiator.vue'
const route = useRoute()
const router = useRouter()
const userInfos = useLanisteStore()
const getFormCreate = ref()
const disabled = () => {
  return userInfos.deniers == 0 ? true : false
}

const clickGetForm = () => {
  getFormCreate.value = true
}
const ludiInfo = ref(userInfos.ludi)
const getInfoLudi = () => {
  const ludi = userInfos.laniste.ludis.find(
    (x) => x.id.toString() === route.params.id
  )
  if (ludi) {
    ludiInfo.value = ludi
  }
}
const doTrainGladiateur = (idGladiateur: number, typeOfTraining: string) => {
  userInfos.Train(ludiInfo.value.specialite, typeOfTraining, idGladiateur)
}

const numberOfGladiatorToCreate = computed(() => {
  return 10 - userInfos.laniste.gladiateurs.length
})
console.log(numberOfGladiatorToCreate.value)
onMounted(() => {
  getInfoLudi()
})
</script>
<template>
  <div class="m-5">
    <button
      @click="router.back"
      class="bg-red-600 text-white mr-4 px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-700 transition duration-300"
    >
      Retour
    </button>
  </div>
  <div class="flex flex-col m-10 text-center">
    <p>
      <span class="font-medium">Laniste</span> : {{ userInfos.laniste.laniste }}
    </p>
    <div v-if="userInfos.deniers > 0">
      <p>
        <span class="font-medium">Deniers restants :</span>
        {{ userInfos.deniers }}
      </p>
    </div>
    <div v-else>
      <p>
        <span class="text-red-500 font-semibold"
          >Vous n'avez plus de deniers</span
        >
      </p>
    </div>
    <p><span class="font-medium">Ludi : </span> {{ ludiInfo.nom }}</p>
    <p>
      <span class="font-medium">Specialité du ludi :</span>
      {{ ludiInfo.specialite }}
    </p>

    <p>
      <span class="font-medium">Nombre de gladiateurs :</span>
      {{ userInfos.laniste.gladiateurs.length }}
    </p>
    <br />
    <p><span class="font-medium">Liste des Gladiateurs :</span></p>
    <br />
    <div class="grid grid-cols-2">
      <div v-for="g in userInfos.laniste.gladiateurs">
        <p><span class="text-red-500 font-medium">Nom : </span>{{ g.nom }}</p>
        <p>
          <span class="text-red-500 font-medium">ADR :</span> {{ g.adresse }}
        </p>
        <p>
          <span class="text-red-500 font-medium">EQ :</span>{{ g.equilibre }}
        </p>
        <p><span class="text-red-500 font-medium">FOR :</span>{{ g.force }}</p>
        <p>
          <span class="text-red-500 font-medium">STG :</span>{{ g.strategie }}
        </p>
        <p>
          <span class="text-red-500 font-medium">VIT :</span>{{ g.vitesse }}
        </p>
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
    </div>
    <br />

    <div v-if="numberOfGladiatorToCreate > 0 || userInfos.deniers == 0">
      <p>
        Vous pouvez encore recuter
        {{ numberOfGladiatorToCreate }}
        Gladiateurs
      </p>
    </div>
    <div v-else>Vous ne pouvez plus créer de Gladiateur</div>
    <div v-if="numberOfGladiatorToCreate >= 1 || userInfos.deniers > 0">
      <button
        :disabled="disabled()"
        @click="clickGetForm()"
        :class="{
          'border-2 border-red-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300':
            disabled() == false,
          'border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium ':
            disabled() == true,
        }"
      >
        Recruter un gladiateur
      </button>
      <br />

      <div v-if="userInfos.deniers > 0">
        <CreateGladiator :id-ludi="ludiInfo.id" />
      </div>
    </div>
  </div>
</template>
