<template>
  <div class="flex">
    <navigation />

    <div class="container flex items-center justify-center">
      <div class="w-9/12 py-20">
        <!-- <logo /> -->
        <h1 class="title text-2xl md:text-3xl lg:text-5xl">
          Hi, I'm Tyler Patton
        </h1>
        <h2 class="subtitle text-1xl md:text-2xl lg:text-4xl">
          I am the Sr. Web Developer at <strong>Digital Media Management</strong>, passionate about designing and building user centered websites, interfaces, and applications. I have a strong enthusiasm for learning about the newest web technologies.
        </h2>
      </div>
    </div>

    <!-- <site-footer /> -->
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    SiteFooter
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
}

.title {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 500;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
