<template lang="pug">
Layout
  .text-4xl Posts.vue
  .text-xl Show list of posts
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
