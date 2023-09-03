<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Greetings from "./components/Greetings.vue";
import BlobImage from "./components/BlobImage.vue";
import TechStack from "./components/TechStack.vue";
import Introduction from "./components/Introduction.vue";
import Education from "./components/Education.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Hobbies from "./components/Hobbies.vue";
import Contact from "./components/Contact.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <!-- <Navigation /> -->
  <div class="container" id="home">
    <header class="banner">
      <Greetings msg="Joseph" />
      <BlobImage />
    </header>
    <Introduction class="scroll-top" id="introduction" />
    <TechStack class="scroll-top" id="techstack" />
    <WorkExperience class="scroll-top" id="workexperience" />
    <Education class="scroll-top" id="education" />
    <Hobbies class="scroll-top" id="hobbies" />
    <Contact class="scroll-top" id="contact" />
  </div>

  <RouterView />
</template>

<style scoped>
.container {
  max-width: 70rem;
  margin: auto;
  padding: 0 1rem;
  box-sizing: border-box;

  /* border: 1px solid red; */
}
.scroll-top {
  scroll-margin-top: 3rem;
}
.banner {
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 45rem;
  margin-bottom: 5rem;
}

@media only screen and (max-width: 1120px) {
  /* TABLET SIZE */

  .banner {
    flex-direction: column-reverse;
    text-align: center;
  }
}
</style>
