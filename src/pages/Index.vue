<template lang="pug">
Layout
  section.section
    .personalcontainer
      PersonalCard
    img(id="landing-image" src="/images/bg_placeholder.jpg")
</template>

<script>
import Layout from '@/layouts/Default'
import PersonalCard from '@/components/PersonalCard'
export default {
  metaInfo: {
    title: 'supro.me'
  },
  components: { Layout, PersonalCard }
}
</script>
<style>
.personalcontainer {
  width: 500px;
  margin: auto;
}
#landing-image{
  position: absolute;
  z-index: -2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 33% 100%;
}
</style>
