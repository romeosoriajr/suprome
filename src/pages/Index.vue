<template lang="pug">
Layout
  section.section
    .container.columns.is-desktop.is-vcentered
      .column.is-offset-1
        figure.image.is-256x256
          img.is-rounded(id="profile-image" src="https://bulma.io/images/placeholders/256x256.png")
      .column.is-offset-1
        h1.title.has-text-light Sup? I'm Rome.
        h2.subtitle.has-text-light doing things in js
        div
          p.has-text-light icon icon icon
    img(id="landing-image" src="/images/bg_placeholder.jpg")
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
