<template lang="pug">
.card
  .card-image
    figure.image.is-4by3
      img(:src="project.image" alt="Project Image")
  .card-content
    .media
      .media-content
        g-link(:to="project.path")
          p.title.is-4 {{ project.title }}
        p.subtitle.is-6 Last updated: {{ project.date }}
    .content {{ project.description }}
</template>
<script>
export default {
  props: ['project']
}
</script>
