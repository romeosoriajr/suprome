<template lang="pug">
Layout
  .container
    .card
      .card-header
        p.card-header-title Card Header Title
        .card-header-icon Icon
      .card-image
        figure.image.is-4by3
          img(src="https://bulma.io/images/placeholders/1280x960.png")
      .card-content
        .media
          .media-content
            .title.is-4 {{ $page.post.title }}
            .subtitle.is-6 Subtitle Text
        .content blah blah blah
</template>
<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    description
    date
  }
}
</page-query>
