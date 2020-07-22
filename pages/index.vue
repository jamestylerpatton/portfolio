<template>
  <div>

    <div class="container w-full min-h-screen flex items-center justify-center">
      <div class="w-9/12 py-20">
        <span class="text-2xl md:text-3xl lg:text-5xl align-top mr-5">&#128075;</span>
        <h1 class="title text-gray-800 text-2xl md:text-3xl lg:text-5xl inline-block">
          Hi, I'm Tyler Patton
        </h1>
        <h2 class="subtitle text-gray-600 text-1xl md:text-2xl lg:text-4xl">
          I am a Web Developer at <strong>Digital Media Management</strong>, passionate about designing and building user centered websites, interfaces, and applications. I have a strong enthusiasm for learning about the newest web technologies.
        </h2>
      </div>
    </div>

    <div class="container w-full min-h-screen flex items-start justify-center">
      <div class="lg:w-1/2 w-9/12 pb-20 text-gray-600 leading-relaxed">
        <section>
          <h3 class="uppercase mb-6 font-bold">Experience</h3>
          <div class="mb-6">
            <h4 class="text-gray-800">Sr. Web Developer</h4>
            <p class="mb-4">
              <a href="https://digitalmediamanagement.com/" target="_blank" class="underline hover:text-gray-800">Digital Media Management</a>
              – Sep 2015 – present
            </p>
            <ul class="list-">
              <li>Build and maintain responsive and secure websites</li>
              <li>Manage web servers where websites and domain names are hosted</li>
              <li>Write maintainable and readable and semantic code</li>
              <li>Oversee department and supervise web development team</li>
            </ul>
          </div>
          <div>
            <h4 class="text-gray-800">Front End Web Developer</h4>
            <p class="mb-4">
              <a href="https://www.inmotionhosting.com/" target="_blank" class="underline hover:text-gray-800">InMotion Hosting</a>
              – May 2014 – Aug 2015
            </p>
            <ul class="list-">
              <li>Lead development for Web Hosting Hub (webhostinghub.com) site redesign</li>
              <li>Make company website (inmotionhosting.com) responsive</li>
              <li>Learned Git, Linux/Unix, and how to develop with PHP and Ruby frameworks</li>
              <li>Developed custom newsletters and maintenance emails to be sent out to all clients</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 class="uppercase mt-10 mb-6 font-bold">Skills</h3>
          <div class="mb-6">
            <p class="mb-4">
              Front-end (responsive) Web Development, Server-side Web Development, User Experience, User Interface Design, eCommerce
            </p>
            <p>
              HTML, CSS, JavaScript, MySQL, LESS/SASS, Vue.js, Node.js, PHP, Laravel, Git, Photoshop, Illustrator, Linux/Unix, Terminal/SSH, OOP, WordPress Custom Themes, Shopify Custom Themes
            </p>
          </div>
        </section>

        <section>
          <h3 class="uppercase mt-10 mb-6 font-bold">Projects</h3>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://creatorlab.co/" target="_blank" class="underline">Creator Lab</a>
            </h4>
            <p>
              – PHP, Laravel, JavaScript, Vue.js, SASS, SQL
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://www.qantasexplorer.com/" target="_blank" class="underline">Qantas Explorer</a>
            </h4>
            <p>
              – PHP, Laravel, JavaScript, Vue.js, SASS, SQL
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://digitalmediamanagement.com" target="_blank" class="underline">Digital Media Management</a>
            </h4>
            <p>
              – PHP, WordPress, JavaScript, GSAP, SASS
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://cznd.co/" target="_blank" class="underline">CZND</a>
            </h4>
            <p>
              – Shopify, JavaScript, SASS
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://www.usanetwork.com/treadstone/operation-treadstone/" target="_blank" class="underline">Operation Treadstone</a>
            </h4>
            <p>
              – JavaScript, Vue, Nuxt, GSAP
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://boyfriendperfume.com/" target="_blank" class="underline">Boyfriend Perfume</a>
            </h4>
            <p>
              – Shopify, JavaScript, SASS
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="http://wearecampfire.media/" target="_blank" class="underline">Campfire Media</a>
            </h4>
            <p>
              – PHP, WordPress, JavaScript
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-gray-800">
              <a href="https://www.morrowsoftgoods.com/" target="_blank" class="underline">Morrow Soft Goods</a>
            </h4>
            <p>
              – Shopify, JavaScript, SASS
            </p>
          </div>
        </section>
      </div>
    </div>

    <!-- <site-footer /> -->
  </div>
</template>

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
  /* display: block; */
  font-weight: 500;
  letter-spacing: 1px;
  overflow: hidden;
  opacity: 0;
}
.title .letter{
  opacity: 0;
  display: inline-block;
}

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  methods: {
    animateLetters() {
      let textWrapper = document.querySelector('h1.title');
      textWrapper.style.opacity = 1;
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({})
        .add({
          targets: 'h1.title .letter',
          translateY: [-100,0],
          opacity: 1,
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 30 * i
        });
    }
  },

  mounted() {
    this.animateLetters();
  }
}
</script>
