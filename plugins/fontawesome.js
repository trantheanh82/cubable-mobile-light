import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faSignOutAlt, faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faUser, faSignOutAlt, faBars, faChevronLeft, faPlus)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})