<script>
import MovingShapes from "./inner-components/MovingShapes.vue";
export default {
  components: {
    MovingShapes, // Register the Card component for use in the template
  },
};
</script>

<template>
  <div class="wrapper">
    <h2>Introduction</h2>
    <div class="d-flex tablet-column">
      <p class="width-100 p-1">
        I am a <span class="featured-text">qualified</span> front-end developer
        with over 2 years experience working in a bespoke learning application
        development environment. Comfortable leading projects and working with
        stakeholders, I thrive in a creative and
        <span class="featured-text">technically challenging environment</span>
        and strive to create lasting solutions.I collaborate closely with
        front-end technologies,
        <span class="featured-text">consistently pushing their boundaries</span
        >. In my spare time, I've developed a business app, worked on back-end
        development, and even ventured into areas like game development. With a
        strong knowledge of
        <span class="featured-text"
          >software, excellent communication and team working skills</span
        >, I aspire to have a successful career within Software Engineering and
        development.
      </p>
      <MovingShapes />
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: var(--color-accent);
}

.wrapper {
  margin-bottom: 3rem;
  min-height: fit-content;
}

.featured-text {
  background: var(--color-tertiary-light);
}
.width-100 {
  width: fit-content;
  background-color: var(--color-background-grey);
  padding: 1rem;
}

.d-flex {
  display: flex;
  flex-direction: row;
}
</style>
