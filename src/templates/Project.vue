<template lang="pug">
Layout
  section.section
    .columns.is-tablet.is-gapless
      .column.project-figure
        .card-image
          figure.image.is-4by3
            img(:src="$page.project.image")
      .card.column.project-card
        .card-content
          .media
            .media-content
              .title.is-4 {{ $page.project.title }}
              .subtitle.is-6 {{ $page.project.description }}
          .content {{ $page.project.text }}
        footer.card-footer
          p.card-footer-item View App
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    id
    title
    description
    date
    image
    text
  }
}
</page-query>
<script>
</script>
<style>
.section {
  padding-top: 1.5rem;
}
.project-figure {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
