<template lang="pug">
.card.card-personal
  .card-content
    .media
      .media-left
        figure.image.is-128x128
          img.is-rounded(id="profile-image" src="https://bulma.io/images/placeholders/256x256.png")
      .media-content
        p.title.is-4.has-text-light Romeo Soria Jr.
        p.subtitle.is-6.has-text-light Web Developer, Full Stack JavaScript
        p.subtitle.is-6.has-text-light hey@rome.af
</template>
<style>
@media only screen and (min-width: 769px) {
  .reverse-personal-order {
    display: flex;
    flex-direction: row-reverse;
  }
}

.card-personal {
  background-color: transparent;
  box-shadow: 0 0 0 0;
}
</style>
