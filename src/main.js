import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import {faStar as fasStar} from "@fortawesome/free-solid-svg-icons"
import {faStar as farStar} from "@fortawesome/free-regular-svg-icons"

library.add(fasStar, farStar)

const app = createApp(App)

// Registriamo il componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
