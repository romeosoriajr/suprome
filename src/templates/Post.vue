<template lang="pug">
Layout
  section.section
      PostListItem(:post="$page.post")
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
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
import PostListItem from '@/components/PostListItem'
export default {
  components: { PostListItem }
}
</script>
<style>
</style>
