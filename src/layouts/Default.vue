<template lang="pug">
#hello
  NavBar
  .container.mx-auto.test-boundaries
    slot
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: { NavBar }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.test-boundaries {
  background: yellow;
}
</style>
