<template lang="pug">
b-navbar(fixed-top type="is-black")
  template(slot="end")
    b-navbar-item(tag="g-link" to="/") Home
    b-navbar-item(tag="g-link" to="/projects/") Projects
    b-navbar-item(tag="g-link" to="/blog/") Feed
    b-navbar-item(tag="g-link" to="/contact/") Contact
</template>
