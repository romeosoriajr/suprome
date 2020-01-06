<template lang="pug">
#hello
  nav.flex.items-center.justify-between.flex-wrap.bg-teal-500.p6
    .w-full.block.flex-grow.lg_flex.lg_items-center.lg_w-auto
      .text-sm.lg_flex-grow
        a.block.mt-4.lg_inline-block.lg_mt-0.text-teal-200.hover_text-white.mr-4(href="/") Main
        a.block.mt-4.lg_inline-block.lg_mt-0.text-teal-200.hover_text-white.mr-4(href="/projects") Projects
        a.block.mt-4.lg_inline-block.lg_mt-0.text-teal-200.hover_text-white.mr-4(href="/blog") Blog
        a.block.mt-4.lg_inline-block.lg_mt-0.text-teal-200.hover_text-white.mr-4(href="/contact") Contact
  .container.mx-auto
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
