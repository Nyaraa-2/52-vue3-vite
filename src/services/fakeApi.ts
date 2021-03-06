import axios from 'axios'

const fakeapi = axios.create({
  baseURL: 'http://localhost:3000/',
})

/**
 * Service connexion au compte utilisateur
 * @param email email du compte
 * @param password mot de passe du compte
 * @returns compte utilisateur
 */
export async function getUserAccount(email: string, password: string) {
  try {
    const res = await fakeapi.get(
      `/lanistes?email=${email}&password=${password}`
    )
    return res.data[0]
  } catch (e) {
    throw new Error(`La requête a échoué ${e}`)
  }
}

/**
 * Vérifie qu'un compte existe avant l'inscription
 * @param email email du compte
 * @returns compte utilisateur
 */
export async function isAccountAlreadyExist(email: string) {
  try {
    const res = await fakeapi.get(`/lanistes?email=${email}`)
    return res.data
  } catch (e) {
    throw new Error(`La requête a échoué ${e}`)
  }
}

/**
 * Récupère la liste des lanistes dans la fakeApi
 */
export async function getLanistes() {
  try {
    const res = await fakeapi('/lanistes')
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}

/**
 * Retourne le laniste par son id
 * @returns Laniste
 */
export async function getLanisteById(id: string) {
  try {
    const res = await fakeapi(`/lanistes/${id}`)
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}
/**
 * Récupère la liste des gladiateurs
 */
export async function getGlads() {
  try {
    const res = await fakeapi('/gladiateurs')
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}

/**
 * Récupère la liste des ludis
 */
export async function getLudis() {
  try {
    const res = await fakeapi('/ludis')
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}

//GET /posts/1?_embed=comments
/**
 * Récupère le ludi par l'id du laniste
 */
export async function getLudiByIdUser(idLaniste: string) {
  try {
    const res = await fakeapi(`/lanistes/${idLaniste}?_embed=ludis`)
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}

//GET /posts/1?_embed=comments
/**
 * Récupère les gladiateurs par l'id du ludi
 */
export async function getGladiateurByIdLudi(idLudi: string) {
  try {
    const res = await fakeapi(`/ludis/${idLudi}?_embed=gladiateurs`)
    return res.data
  } catch (e) {
    throw new Error('La requête a échoué')
  }
}
