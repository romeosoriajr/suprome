<template lang="pug">
.suprome
  NavBar
  transition(name="fade" appear)
    main
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
.suprome {
  left: 0;
  top: 0;
}

.fade-enter-active {
  transition: opacity .125s;
}

.fade-enter {
  opacity: 0;
}
</style>
