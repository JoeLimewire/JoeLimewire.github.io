<template>
  <div class="footer">
    <div class="bubbles">
      <!-- Generate random bubbles -->
      <div
        v-for="bubble in bubbles"
        :key="bubble.id"
        class="bubble"
        :style="bubble.style"
      ></div>
    </div>
  </div>

  <svg style="position: fixed; top: 100vh">
    <defs>
      <filter id="blob">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="10"
          result="blur"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="blob"
        ></feColorMatrix>
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      bubbles: [],
    };
  },
  mounted() {
    this.generateBubbles();
  },
  methods: {
    generateBubbles() {
      const numBubbles = 30;
      const colours = [
        "var(--color-primary)",
        "var(--color-primary-text)",
        "var(--color-secondary)",
        "skyblue",
        "var(--color-accent-light)",
        "var(--color-accent)",
      ];
      for (let i = 0; i < numBubbles; i++) {
        const bubble = {
          id: i,
          style: `--size:${2 + Math.random() * 4}rem;
                  --distance:${6 + Math.random() * 4}rem;
                  --position:${6 + Math.random() * 94}%;
                  --time:${2 + Math.random() * 2}s;
                  --delay:${-1 * (2 + Math.random() * 2)}s;
                  --colour:${
                    colours[Math.floor(Math.random() * colours.length)]
                  }`,
        };
        this.bubbles.push(bubble);
      }
    },
  },
};
</script>
<style>
.footer {
  /* border: 1px solid red; */
  z-index: 1;
  --footer-background: var(--color-primary);
  display: grid;
  position: relative;
  grid-area: footer;
  min-height: 12rem;
  overflow: hidden;
}
.bubbles {
  border: 1px solid blue;
  z-index: -1;
  position: absolute;
  top: -1rem;
  left: 0;
  right: 0;
  height: 1rem;
  background: var(--footer-background);
  filter: url("#blob");
}

.bubble {
  z-index: 0;
  position: absolute;
  /* top: var(--size); */
  left: calc(var(--position) - var(--size) / 2);
  background: var(--colour);
  border-radius: 100%;
  animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
    bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
  transform: translate(-50%, -100%);
  transition: filter 1s ease-in-out;
}

.bubble:hover {
  filter: hue-rotate(180deg) saturate(5);
}

@keyframes bubble-size {
  0%,
  75% {
    width: var(--size, 4rem);
    height: var(--size, 4rem);
  }
  100% {
    width: 0rem;
    height: 0rem;
  }
}
@keyframes bubble-move {
  0% {
    top: -4rem;
  }
  100% {
    top: var(--distance, 10rem);
  }
}
</style>
