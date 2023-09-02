<script>
import LeakingBubbles from "./inner-components/LeakingBubbles.vue";
export default {
  components: {
    LeakingBubbles,
  },
};
</script>

<template>
  <div>
    <h2><span class="accent">Hobbies</span> and Interests</h2>
    <div class="sin">
      <div class="wrapper">
        <div class="topic">
          <h3>Tech-testing</h3>
          I frequently explore technologies that captivate my curiosity. Lately,
          I've been crafting a strong, scalable Laravel PHP backend, using it as
          a foundation for a forthcoming business's full-stack solution.
          Previously, I've built games using Godot and Unity engines and
          experimented with web frameworks including Vue, Svelte, and Angular.
        </div>
        <div class="topic">
          <h3>Music Production</h3>
          Ever since a young age, I have loved music. I learned how to play the
          piano and as its timbre is limited, I naturally learned how to create
          modern electronic music, of-which I post on most platforms. I've found
          it ties in with mathamatics and creativity perfectly and has tied into
          other genres of my life. I don’t boast about this enough, though from
          afar, anyone could see it as at least an outline of what I relish.
        </div>
        <div class="topic">
          <h3>Outdoors and Nature</h3>
          I enjoy hiking as it's a great way to disconnect from the office
          routine. Walking outdoors sparks my creativity and often helps me come
          up with solutions to problems, even though it might mean a long way
          back sometimes! Climbing Ben Nevis has been a highlight for me, and
          I'm excited to tackle more Munros in the future.
        </div>
      </div>
      <LeakingBubbles />
    </div>
  </div>
</template>

<style scoped>
.sin {
  position: relative;
}
.wrapper {
  background-color: var(--color-background-grey);
  /* padding: 1rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 99;
  /* border: 1px solid gold; */
}

.topic {
  width: 33%;
  margin: 1rem;
}

.accent {
  color: var(--color-accent);
}

@media only screen and (max-width: 767px) {
  /* MOBILE SIZE */
  .wrapper {
    flex-direction: column;
  }

  .topic {
    width: fit-content;
  }
}
</style>
