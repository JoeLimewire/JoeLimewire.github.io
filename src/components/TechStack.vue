<script>
import Card from "./inner-components/Card.vue";

export default {
  components: {
    Card, // Register the Card component for use in the template
  },
};
</script>

<template>
  <div>
    <h2>Key <span class="color-primary">tech</span> stack</h2>
    <div class="card-container">
      <Card title="JavaScript" content="Language" />
      <Card title="C#" content="Language" />
      <Card title="Java" content="Language" />
      <Card title="PHP" content="Language" />
      <Card title="Python" content="Language" />
      <Card title="React.js" content="Web framework" />
      <Card title="React Native" content="Mobile app framework" />
      <Card title="Laravel" content="Web framework" />
      <Card title="Vue.js" content="Js framework" />
      <Card title="Wordpress" content="Saas" />
      <Card title="Bootstrap & Tailwind" content="UI / Styling packages" />
      <Card title="SVN" content="Version control" />
      <Card title="Git" content="Version control " />
      <Card title="Godot" content="Game engine" />
      <Card title="Three.js" content="3D Web renderer" />
      <Card title="Greensock.js" content="Animation package" />
    </div>
    <!-- Use the Card component here -->
  </div>
</template>

<style>
/* Your component styles here */
.card-container {
  display: flex;
  max-height: 16.5rem;
  margin-bottom: 3rem;
  overflow-y: scroll;
  border-radius: var(--border-radius);
  border: 3px solid #e5e5e5;
  flex-wrap: wrap;
}

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  background: #e5e5e5;
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: var(--border-radius);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-light);
}

.color-primary {
  color: var(--color-primary-text);
}
</style>
