<template lang="pug">
.post-list-item
  h4 {{ post.title }}
  h3 {{ post.date }}
</template>

<script>
export default {
  props: ['post']
}
</script>
