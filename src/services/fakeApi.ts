import axios from 'axios'

const fakeapi = axios.create({
  baseURL: 'http://localhost:3000/',
})
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
