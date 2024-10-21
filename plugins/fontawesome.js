import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faSignOutAlt, faBars, faChevronLeft, faPlus, faTableList, faTable, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faUser, faSignOutAlt, faBars, faChevronLeft, faPlus, faTableList, faTable, faAnglesRight)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})