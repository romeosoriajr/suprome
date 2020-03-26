<template lang="pug">
Layout
  section.hero.is-primary.is-bold
    .hero-body
      h1.title Feed
      h2.subtitle Feed Subtitle
  section.section
    .post-item
      PostListItem(v-for="edge in $page.allPost.edges", :key="edge.node.id", :post="edge.node")
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          text
          image
          title
          description
          date (format: "M D YYYY")
          path
        }
      }
    }
  }
</page-query>
<script>
import PostListItem from '@/components/PostListItem'
export default {
  components: { PostListItem }
}
</script>
<style>
</style>
