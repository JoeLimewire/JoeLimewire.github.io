<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { defineProps } from "vue";

defineProps({
  title: String,
  content: String,
});

export default {
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
h3,
p {
  pointer-events: none;
  z-index: 1;
}
.card {
  position: relative;
  padding: 1rem;
  height: 2.5rem;
  min-width: 0rem;
  background-color: var(--color-background-grey);
  border-radius: var(--border-radius);
  margin: 0.5rem;
  transition: all 0.25s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  /* box-shadow: 0px 5px 20px 3px var(--color-primary); */
  height: 4rem;
  min-width: 7rem;
}
.card:before {
  content: "";
  position: absolute;
  background: var(--color-secondary);
  height: 150px;
  width: 0px;
  left: -10px;
  top: 0px;
  transition: all 0.2s ease-out;
  z-index: -1;
}
.card:hover::before {
  position: absolute;
  background: var(--color-secondary);
  height: 150px;
  width: 400px;
  transition: all 0.5s ease-out;
}

.card:hover p {
  bottom: 1rem;
  transition-delay: 0.1s;
}

p {
  position: absolute;
  bottom: -50px;
  white-space: nowrap;
  transition: all 0.4s;
  transition-delay: 0s;
}
</style>
