import { defineStore } from 'pinia'
import { ref } from 'vue'
export interface Laniste {
  id: number
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
  id: 0,
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
              break
            case 'tactique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(1, 3))
              break
            case 'combine':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(1, 5))
              break
          }
        case 'ATHLETISME':
          switch (typeOfTraining) {
            case 'physique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 5))
              break
            case 'tactique':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(2, 3))
              break
            case 'combine':
              this.SetStatistiquesGladiator(gladiateur, this.GetPJ(3, 9))
              break
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
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
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
    async createGladiator(name: string, idludi: number) {
      try {
        const gladiateur: Gladiateur = {
          id: 0,
          nom: name,
          adresse: Math.round(Math.floor(Math.random() * (3 - 0 + 1)) + 0),
          force: Math.round(Math.floor(Math.random() * (3 - 0 + 1)) + 0),
          equilibre: Math.round(Math.floor(Math.random() * (3 - 0 + 1)) + 0),
          vitesse: Math.round(
            Math.floor(Math.random() * (3 - 0 + 1)) + 0
          ).toString(),
          strategie: Math.round(
            Math.floor(Math.random() * (3 - 0 + 1)) + 0
          ).toString(),
          ludiId: idludi,
        }
        await fetch('http://localhost:3000/gladiateurs', {
          method: 'POST',
          body: JSON.stringify({
            nom: gladiateur.nom,
            adresse: gladiateur.adresse,
            force: gladiateur.force,
            equilibre: gladiateur.equilibre,
            vitesse: gladiateur.vitesse,
            strategie: gladiateur.strategie,
            ludiId: idludi,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((r) => {
          if (!r.ok) {
            return r.status
          } else {
            const test = r.json().then()
            console.log(test)
            gladiateur.id = this.laniste.gladiateurs.push(gladiateur)
          }
        })
      } catch (error) {
        return error
      }
    },
  },
  getters: {},
})
