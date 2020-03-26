<template lang="pug">
Layout
  section.hero.is-primary.is-bold
    .hero-body
      h1.title Projects
      h2.subtitle Projects Subtitle
  section.section
    .posts.columns.is-multiline.is-desktop
      template(v-for="edge in $page.allProject.edges")
        .column.is-one-third
          ProjectCard(:project="edge.node" :key="edge.node.id")
</template>

<page-query>
  query {
    allProject {
      totalCount
      edges {
        node {
          id
          title
          image
          description
          date (format: "M D YYYY")
          path
        }
      }
    }
  }
</page-query>
<script>
import ProjectCard from '@/components/ProjectCard'
export default {
  components: { ProjectCard }
}
</script>
<style>
</style>
