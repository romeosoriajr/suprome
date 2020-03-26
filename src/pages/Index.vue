<template lang="pug">
Layout
  section.section
    .container.columns.is-mobile.is-vcentered
      .column.is-offset-1
        h1.title Sup? I'm Rome.
        h2.subtitle doing things in JavaScript
    img(id="landing-image" src="https://bulma.io/images/placeholders/1280x960.png")
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
.container {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
#landing-image{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 33% 100%;
}
</style>
