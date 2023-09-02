<template>
  <!-- Add a button for the hamburger menu -->
  <div class="wrapper">
    <div
      class="hamburger-icon"
      @click="toggleMenu"
      :class="{ isOpen: isMenuOpen }"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <!-- Navigation menu for small screens -->
    <div class="menu" v-if="isMenuOpen">
      <a href="#home" class="portion" @click="toggleMenu">Home</a>
      <a href="#introduction" class="portion" @click="toggleMenu"
        >Introduction</a
      >
      <a href="#techstack" class="portion" @click="toggleMenu">Tech stack</a>
      <a href="#workexperience" class="portion" @click="toggleMenu"
        >Experience</a
      >
      <a href="#education" class="portion" @click="toggleMenu">Education</a>
      <a href="#hobbies" class="portion" @click="toggleMenu">Hobbies</a>
      <a href="#contact" class="portion" @click="toggleMenu">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
:root {
  --bar-width: 60px;
  --bar-height: 8px;
  --hamburger-gap: 6px;
}
.wrapper {
  position: sticky;
  /* width: fit-content; */
  top: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  margin: 0px;
}

.hamburger-icon {
  cursor: pointer;
  padding: 1rem;
  height: 35px;

  border-radius: 0, 0, 1rem, 0;
  aspect-ratio: 1/1;
  background-color: white;
}

.bar {
  width: 35px;
  height: 6px;
  background-color: black;
  margin-bottom: 6px;
  opacity: 1;
  transform-origin: left center;
  transition: all 0.2s ease-in-out;
  border-radius: 1rem;
}

.isOpen > :nth-child(1) {
  transform: rotate(45deg);
  width: 35px;
}

.isOpen > :nth-child(2) {
  opacity: 0;
}

.isOpen > :nth-child(3) {
  rotate: -45deg;
  width: 35px;
}

.navigation {
  height: 1rem;
  position: sticky;
  top: 0rem;
  left: 0;
  padding: 1rem;
  background: white;
  z-index: 9999;
}
.menu {
  display: flex;
  flex-direction: column;
}
.portion {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  margin-bottom: 1rem;
}
.portion:visited {
  color: #323232;
}

.wrapper:has(.isOpen),
.isOpen {
  background-color: var(--color-secondary) !important;
  transition: all 0.3s;
}

@media only screen and (max-width: 600px) {
  /* TABLET SIZE */
  .navigation {
    padding-bottom: 2rem;
  }
}
</style>
