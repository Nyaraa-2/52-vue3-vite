import { defineStore } from 'pinia'
import { ref } from 'vue'
export interface Laniste {
  id: string
  email: string
  password: string
  laniste: string
  ludis: Array<Ludi>
  gladiateurs: Array<Gladiateur>
}
/**
 * Interface Gladiateur
 */
export interface Ludi {
  id: number
  nom: string
  specialite: string
  lanisteId: number
}

const templateLudi: Ludi = {
  id: 0,
  nom: '',
  specialite: '',
  lanisteId: 0,
}

/**
 * Interface Gladiateur
 */
export interface Gladiateur {
  id: number
  nom: string
  adresse: number
  force: number
  equilibre: number
  vitesse: string
  strategie: string
  ludiId: number
}
/**
 * Template laniste
 */
const templateUser: Laniste = {
  id: '',
  email: '',
  password: '',
  laniste: '',
  ludis: [],
  gladiateurs: [],
}
export const useLanisteStore = defineStore('laniste', {
  state: () => ({
    laniste: templateUser,
    ludi: ref(templateLudi),
    deniers: 10,
  }),
  actions: {
    Train(typeOfLudi: string, typeOfTraining: string, idGladiateur: number) {
      const index = this.laniste.gladiateurs.findIndex(
        (x) => x.id === idGladiateur
      )
      const gladiateur = this.laniste.gladiateurs[index]
      console.log(gladiateur)

      switch (typeOfLudi) {
        case 'COURSE_DE_CHAR':
          switch (typeOfTraining) {
            case 'physique':
              console.log('course de char entrainement physique')
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(2, 4))
              break
            case 'tactique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 6))
              break
            case 'combine':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(2, 7))
              break
          }
        case 'LUTTE':
          switch (typeOfTraining) {
            case 'physique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 6))
            case 'tactique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(1, 3))
            case 'combine':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(1, 5))
          }
        case 'ATHLETISME':
          switch (typeOfTraining) {
            case 'physique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 5))
            case 'tactique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(2, 3))
            case 'combine':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 9))
          }
      }
    },
    /**
     * Génère la progression journalière
     * @param min minimum en fonction du type de ludi
     * @param max minimum en fonction du type de ludi
     * @returns random
     */
    GetPJ(min: number, max: number) {
      let difference = max + 1 - min
      let rand = Math.random()
      rand = Math.floor(rand * difference)
      rand = rand + min
      return Math.round(rand)
    },
    /**
     * Modifie les statistiques d'un gladiateur en fonction de la PJ
     * @param gladiateur Gladiateur
     * @param pj progression journalière
     */
    SetStatistiquesGladiator(gladiateur: Gladiateur, pj: number) {
      gladiateur.adresse += 0.4 * pj
      gladiateur.force += 0.3 * pj
      gladiateur.equilibre -= 0.1 * pj
      let vitesseToInt = parseInt(gladiateur.vitesse)
      gladiateur.vitesse = (vitesseToInt += 0.5 * pj).toString()
      let strategieToInt = parseInt(gladiateur.strategie)
      gladiateur.strategie = (strategieToInt -= 0.2 * pj).toString()
    },
  },
  getters: {},
})
