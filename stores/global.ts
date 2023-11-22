// stores/global.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { user: {},etud_p:{},etab_p:{},connected: false }
  },
})