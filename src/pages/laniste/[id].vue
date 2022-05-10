<script lang="ts" setup>
import { getLudiByIdUser, getGladiateurByIdLudi } from '@/services/fakeApi'
import { useLanisteStore } from '../../stores/laniste'

const router = useRouter()
const route = useRoute()
const lanisteStore = useLanisteStore()
const test = () => {
  lanisteStore.$dispose
}
const getGladiators = async (id: string) => {
  await getGladiateurByIdLudi(id).then((response) => {
    lanisteStore.laniste.gladiateurs = response.gladiateurs
  })
  router.push(`/ludi/${id}`)
}
onMounted(async () => {
  try {
    lanisteStore.laniste = await getLudiByIdUser(`${route.params.id}`)
  } catch (error) {}
})
</script>
<template>
  <div
    class="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center"
  >
    <div
      class="container lg:w-full xl:w-full sm:w-full md:w-full bg-white shadow-lg transform duration-200 easy-in-out"
    >
      <div class="h-70 overflow-hidden">
        <img
          class="w-full"
          src="https://cdnb.artstation.com/p/assets/images/images/010/801/603/large/minjun-kim-1603-orb-dragon.jpg?1526314198"
          alt=""
        />
      </div>

      <div class="text-center px-14">
        <h2 class="text-gray-800 text-3xl font-bold">
          {{ lanisteStore.laniste.laniste }}
        </h2>
        <p class="text-red-400 mt-2">@{{ lanisteStore.laniste.email }}</p>
        <p class="mt-2 text-gray-600">
          Cliquez sur votre Ludi afin de recruter un gladiateur ou effectuer vos
          entrainements
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deniers : </span
          >{{ lanisteStore.deniers }}
        </p>
        <br />
        <button
          @click="router.push('/createLudi')"
          class="border-2 border-red-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
        >
          Créer un nouveau Ludi
        </button>
        <button
          @click="test(), router.push('/')"
          class="border-2 border-red-600 text-black px-4 py-2 ml-6 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300"
        >
          Deconnexion
        </button>
      </div>
      <hr class="mt-6" />

      <div class="grid grid-cols-3 text-center">
        <div class="bg-gray-50" v-for="ludi in lanisteStore.laniste.ludis">
          <div
            class="text-center w-1/2 p-4 m-auto hover:bg-gray-100 cursor-pointer"
          >
            <a @click="getGladiators(`${ludi.id}`)"
              ><p>
                <span class="text-red-500 font-semibold">Nom du ludi :</span
                ><br />
                {{ ludi.nom }}
              </p>
              <p>
                <span class="text-red-500 font-semibold">{{
                  ludi.specialite
                }}</span
                ><br />
              </p>
              <p>
                <span class="text-black font-medium"
                  >Entrainements restants :</span
                >
                1
              </p>
            </a>
          </div>
          <div class="border"></div>
        </div>
      </div>
    </div>
  </div>
</template>
