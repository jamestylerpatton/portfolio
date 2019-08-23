<template>
  <div class="site-border flex justify-center">
    <nuxt />
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

.site-border{
  border: 10px solid #e13d47;
  background-color: #ffffff;
  min-height: 100vh;
}
</style>
