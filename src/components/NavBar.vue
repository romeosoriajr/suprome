<template lang="pug">
b-navbar(fixed-top type="is-black")
  template(slot="end")
    b-navbar-item(tag="g-link" to="/blog/") Projects
    b-navbar-item(tag="g-link" to="/blog/") Feed
    b-navbar-item(tag="g-link" to="/blog/") Contact
</template>
