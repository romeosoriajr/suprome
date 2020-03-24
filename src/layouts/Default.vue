<template lang="pug">
.suprome
  NavBar
  slot
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  metaInfo: {
    title: 'supro.me'
  },
  components: { NavBar }
}
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
