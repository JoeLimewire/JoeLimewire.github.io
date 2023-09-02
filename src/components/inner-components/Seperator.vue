<template>
  <div class="seperator" ref="seperator">
    <div class="colour-column"></div>
    <div class="colour-column"></div>
    <div class="colour-column"></div>
    <div class="colour-column"></div>
    <div class="colour-column"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.randomiseLocations();
    this.assignRandomColors();
    this.randomiseAnimationDelays();
  },
  methods: {
    randomiseLocations() {
      const seperator = this.$refs.seperator;
      const colourColumns = seperator.querySelectorAll(".colour-column");

      colourColumns.forEach((column) => {
        const maxLeft = seperator.clientWidth - column.clientWidth;
        const randomLeft = Math.random() * maxLeft;
        column.style.left = `${randomLeft}px`;
      });
    },
    assignRandomColors() {
      const seperator = this.$refs.seperator;
      const colourColumns = seperator.querySelectorAll(".colour-column");
      const colours = [
        "var(--color-primary)",
        "var(--color-primary-text)",
        "var(--color-secondary)",
        "skyblue",
        "var(--color-accent-light)",
        "var(--color-accent)",
      ];
      colourColumns.forEach((column) => {
        const randomColourIndex = Math.floor(Math.random() * colours.length);
        const randomColour = colours[randomColourIndex];
        column.style.backgroundColor = randomColour;
      });
    },
    randomiseAnimationDelays() {
      const seperator = this.$refs.seperator;
      const colourColumns = seperator.querySelectorAll(".colour-column");
      colourColumns.forEach((column) => {
        const randomDelay = Math.random() * 14; // Generate a random delay between 0 and 14 seconds
        column.style.animationDelay = `-${randomDelay}s`; // Apply the negative delay to start the animation later
      });
    },
  },
};
</script>
<style scoped>
.seperator {
  height: 1rem;
  /* border: 1px solid red; */
  background-color: transparent;
  min-width: 100%;
  position: relative;

  background: white;
  margin: 0rem -1rem 3rem -1rem;
}
.colour-column {
  position: absolute;
  width: 2rem;
  height: 100%;
}
.seperator > .colour-column:nth-child(1) {
  /* background: var(--color-primary); */
  width: 16rem;
  animation: column1 14s infinite alternate ease-in-out;
}
.seperator > .colour-column:nth-child(2) {
  /* background: var(--color-primary-text); */
  width: 8rem;
  animation: column2 12s infinite alternate ease-in-out;
}
.seperator > .colour-column:nth-child(3) {
  /* background: var(--color-secondary); */
  width: 4rem;
  animation: column3 10s infinite alternate ease-in-out;
}
.seperator > .colour-column:nth-child(4) {
  /* background: var(--color-accent); */
  width: 2rem;
  animation: column4 8s infinite alternate ease-in-out;
}
.seperator > .colour-column:nth-child(5) {
  /* background: var(--color-accent-light); */
  width: 1rem;
  animation: column5 6s infinite alternate ease-in-out;
}

@keyframes column1 {
  0% {
    left: 0px;
  }
  100% {
    left: calc(100% - 16rem);
  }
}

@keyframes column2 {
  0% {
    left: 0px;
  }
  100% {
    left: calc(100% - 8rem);
  }
}

@keyframes column3 {
  0% {
    left: 0px;
  }
  100% {
    left: calc(100% - 4rem);
  }
}

@keyframes column4 {
  0% {
    left: 0px;
  }
  100% {
    left: calc(100% - 2rem);
  }
}

@keyframes column5 {
  0% {
    left: 0px;
  }
  100% {
    left: calc(100% - 1rem);
  }
}
</style>
