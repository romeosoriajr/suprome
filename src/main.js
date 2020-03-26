// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)

  // add buefy's nav class to body
  head.bodyAttrs = { class: 'has-navbar-fixed-top' }
  Vue.component('Layout', DefaultLayout)
}
