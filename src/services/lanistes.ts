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
