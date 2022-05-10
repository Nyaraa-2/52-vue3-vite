<script lang="ts" setup>
import { getLudiByIdUser, getGladiateurByIdLudi } from '@/services/fakeApi'
import { useLanisteStore } from '../../stores/laniste'

const router = useRouter()
const route = useRoute()
const lanisteStore = useLanisteStore()

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
      class="container lg:w-1/2 xl:w-1/2 sm:w-full md:w-1/2 bg-white shadow-lg transform duration-200 easy-in-out"
    >
      <div class="h-32 overflow-hidden">
        <img
          class="w-full"
          src="https://cdnb.artstation.com/p/assets/images/images/010/801/603/large/minjun-kim-1603-orb-dragon.jpg?1526314198"
          alt=""
        />
      </div>
      <div class="flex justify-center px-5 -mt-12">
        <img
          class="h-32 w-32 bg-white p-2 rounded-full"
          src="https://i.pinimg.com/564x/ad/e7/b0/ade7b0980bf624e840bde48981097e8c.jpg"
          alt=""
        />
      </div>

      <div class="text-center px-14">
        <h2 class="text-gray-800 text-3xl font-bold">
          {{ lanisteStore.laniste.laniste }}
        </h2>
        <p class="text-red-400 mt-2">@{{ lanisteStore.laniste.email }}</p>
        <p class="mt-2 text-gray-600">
          Cliquez sur votre Ludis afin de recruter un gladiateur ou effectuer
          vos entrainements
        </p>
        <p>
          <span class="text-red-500 font-semibold">Deniers : </span
          >{{ lanisteStore.deniers }}
        </p>
      </div>
      <hr class="mt-6" />

      <div class="flex bg-gray-50" v-for="ludi in lanisteStore.laniste.ludis">
        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
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
</template>
