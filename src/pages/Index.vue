<template lang="pug">
Layout
  section.hero.is-dark
    .hero-body
      .container.columns.is-mobile.is-vcentered
        .column.is-offset-1
          h1.title Sup? I'm Rome.
          h2.subtitle doing things in JavaScript
    img(src="~@/assets/bg-test.jpg")
</template>

<script>
import Layout from '@/layouts/Default'
export default {
  metaInfo: {
    title: 'supro.me'
  },
  components: { Layout }
}
</script>
<style>
section .hero-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  z-index: 2;
}
.hero-body {
  display: flex;
}
section img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
body {
  background-color: green;
}
</style>
