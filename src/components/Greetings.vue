<script setup lang="ts">
import TypingAnimation from "./TypingAnimation.vue";
</script>

<template>
  <div class="wrapper">
    <h1 class="greetings">
      <span class="firstname">Joseph </span>
      <span class="lastname">Higgins</span>
    </h1>
    <TypingAnimation />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
}

.lastname {
  color: var(--color-accent);
}
</style>
