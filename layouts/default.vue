<template>
  <div class="site-border-outer fixed w-full h-full">
    <div class="site-border-inner absolute w-full h-full top-0 left-0 right-0 bottom-0 overflow-auto">
      <navigation />
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #e13d47;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.site-border-outer{
  border: 15px solid #ffffff;
}
.site-border-inner{
  border: 5px solid #e13d47;
  background: #ffffff;
}
</style>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>