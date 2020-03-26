<template lang="pug">
.card
  .card-image(v-if="post.image")
    figure.image.is-4by3
      img(:src="post.image")
  .card-content
    .content
      g-link(:to="post.path")
        .title.is-4 {{ post.title }}
      .subtitle.is-6 {{ post.description }}
    .content
      p {{ post.text }}
</template>

<script>
export default {
  props: ['post']
}
</script>
<style>
.card {
  max-width: 550px;
}
</style>
