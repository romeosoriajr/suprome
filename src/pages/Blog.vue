<template lang="pug">
Layout
  .text-4xl Blog
  .text-xl Show list of posts
  .h5 {{ $page.allPost }}
  section.posts
    PostListItem(v-for="edge in $page.allPost.edges", :key="edge.node.id", :post="edge.node")
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          id
          title
          date (format: "M D YYYY")
          description
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
