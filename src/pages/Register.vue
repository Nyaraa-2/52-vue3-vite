<script lang="ts" setup>
import { getLanistes } from '@/services/fakeApi'
import Gladiator from '@/components/Gladiator.vue'
import Ludi from '@/components/Ludi.vue'
import Forms from '../components/Forms.vue'
import Pseudo from '@/components/Pseudo.vue'
import Layout from '@/components/Layout.vue'
import { useLudi } from '@/composables/useLudi'
/**
 * Model Laniste
 */
export interface Laniste {
  id: string
  email: string
  password: string
  laniste: string
}
/**
 * Modele glad
 */
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

/** Datas */
const mail = ref('')
const mdp = ref('')
const laniste = ref('')
const ludiChosenByUser = ref()
const nameLudi = ref()
const step = ref(1)
const id = ref()
const lanistes = ref(<Array<Laniste>>[])
const errorFetch = ref()
const router = useRouter()
const { doCreateLudi } = useLudi()

/**
 * Récupère les informations lors de la première étape de l'inscription
 * @param email email inscription
 * @param password mot de passe
 */
const getAccount = (email: string, password: string) => {
  mail.value = email
  mdp.value = password
  console.log(mail.value)
  step.value++
}
/**
 * Récupère les informations lors de la seconde étape de l'inscription
 * @param pseudo pseudo inscription
 */
const getPseudo = (pseudo: string) => {
  laniste.value = pseudo
  step.value++
}

/**
 * Récupère les informations lors de la dernière étape de l'inscription
 * Effectue l'inscription + enregistrement du ludi
 * Envoi vers la page de profil avec l'id utilisateur
 * @param type type de ludi choisi
 * @param name nom du ludi choisi
 */
const getLudiChosen = async (type: string, name: string) => {
  ludiChosenByUser.value = type
  nameLudi.value = name
  await doRegistration()
  await getId()
  await doCreateLudi(nameLudi.value, ludiChosenByUser.value[0], id.value.id)
  router.push(`/laniste/${id.value.id}`)
}

/**
 * Post inscription
 */
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

/**
 * Récupère l'id du laniste inséré
 */
const getId = async () => {
  lanistes.value = await getLanistes()
  id.value = lanistes.value.find((x) => x.email == mail.value)
}
</script>
<template>
  <Layout>
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
  </Layout>
</template>
<style></style>
