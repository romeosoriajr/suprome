<template lang="pug">
.post-list-item
  g-link(:to="post.path") {{ post.title }}
  h3 {{ post.date }}
</template>

<script>
export default {
  props: ['post']
}
</script>
