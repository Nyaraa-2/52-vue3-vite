<script lang="ts" setup>
import { getLanistes } from '@/services/fakeApi'
import Gladiator from '@/components/Gladiator.vue'
import Ludi from '@/components/Ludi.vue'
import Forms from '../components/Forms.vue'
import Pseudo from '@/components/Pseudo.vue'
export interface Laniste {
  id: string
  email: string
  password: string
  laniste: string
}
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
// export interface Account {
//   email: string
//   pseudo: string
//   password: string
// }
const mail = ref('')
const mdp = ref('')
const laniste = ref('')
const router = useRouter()
const { t } = useI18n()
const getAccount = (email: string, password: string) => {
  mail.value = email
  mdp.value = password
  console.log(mail.value)
  step.value++
}
const getPseudo = (pseudo: string) => {
  laniste.value = pseudo
  step.value++
}
const getLudiChosen = async (type: string, name: string) => {
  ludiChosenByUser.value = type
  nameLudi.value = name
  await doRegistration()
  const idUser = await doCreateLudi()
  if (errorFetch == null) {
    router.push({ name: '/test', params: { id: `${idUser}` } })
  }
}

const ludiChosenByUser = ref()
const nameLudi = ref()
const step = ref(1)

// const account: Account = {
//   email: '',
//   password: '',
//   pseudo: '',
// }

const errorFetch = ref()
const doRegistration = async () => {
  try {
    await fetch('http://localhost:3000/lanistes', {
      method: 'POST',
      body: JSON.stringify({
        email: mail.value,
        password: mdp.value,
        laniste: laniste.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (!response.ok) {
        errorFetch.value = response.status
      }
    })
  } catch (error) {
    errorFetch.value = error
  }
}

const doCreateLudi = async () => {
  try {
    const id = await getId()
    await fetch('http://localhost:3000/ludis', {
      method: 'POST',
      body: JSON.stringify({
        nom: nameLudi.value,
        specialie: ludiChosenByUser.value[0],
        lanisteId: id?.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (!response.ok) {
        errorFetch.value = response.status
      } else {
        return id
      }
    })
  } catch (error) {
    errorFetch.value = error
  }
}
const lanistes = ref(<Array<Laniste>>[])
const getId = async () => {
  lanistes.value = await getLanistes()
  const id = lanistes.value.find((x) => x.email == mail.value)
  return id
}
</script>
<template>
  <div class="h-screen flex">
    <div
      class="flex w-full lg:w-2/3 justify-center items-center bg-white space-y-8"
    >
      <div class="w-full px-8 md:px-32 lg:px-24">
        <div class="bg-white rounded-md shadow-2xl p-5">
          <h1
            class="w-20 bg-red-500 mt-5 ml-5 py-2 px-2 rounded-2xl text-white font-semibold mb-2 text-center"
          >
            Etape {{ step }}
          </h1>
          <div v-if="step == 1">
            <Forms @registration="getAccount" />
          </div>
          <div v-if="step == 2">
            <Pseudo @pseudo="getPseudo" />
          </div>
          <div v-if="step == 3">
            <Ludi @ludi="getLudiChosen" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:flex w-full lg:w-1/3 login_img_section justify-around items-center"
    >
      <div class="bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="text-white font-bold text-4xl font-sans">
          {{ t('Home_Page.title') }}
        </h1>
        <p class="text-white mt-1">{{ t('Home_Page.subtitle_registrer') }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://cdna.artstation.com/p/assets/images/images/010/801/346/large/minjun-kim-1511-golem-warrior-champ.jpg?1526313587)
      center center;
}
</style>
