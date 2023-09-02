<template>
  <div class="shape-wrapper" data-configuration="1">
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const interval = 3000;
  const shapeWrapperElem = document.querySelector(".shape-wrapper");
  let index = 1;

  setInterval(() => {
    const roundnessChance = Math.random();
    const configurationChance = Math.random();
    const allShapes = document.querySelectorAll(".shape");

    allShapes.forEach((shape) => {
      // Remove existing classes
      shape.classList.remove("round", "rounded", "sharp");

      if (roundnessChance < 0.33) {
        shape.classList.add("round");
      } else if (roundnessChance < 0.66) {
        shape.classList.add("rounded");
      } else {
        shape.classList.add("sharp");
      }

      if (configurationChance < 0.33) {
        index = 1;
      } else if (configurationChance < 0.66) {
        index = 2;
      } else {
        index = 3;
      }
    });

    shapeWrapperElem.dataset.configuration = index.toString();
  }, interval);
});
</script>
<style scoped>
.shape-wrapper {
  /* aspect-ratio: 1/1; */
  position: relative;
  /* width: 100%; */
  min-height: 200px;
}
.round {
  border-radius: 5rem;
}

.rounded {
  border-radius: 3rem;
}

.sharp {
  border-radius: 0;
}

.shape {
  position: absolute;
  height: 30%;
  width: 30%;
  transition-property: left, top, height, width, border-radius, filter;
  transition-duration: 0.75s;
  transition-timing-function: ease-in-out;
}

.shape:hover {
  filter: saturate(3);
  /* transition-duration: 0.2s; */
}

/* Setting colours of the rectangles */
.shape-wrapper > .shape:nth-child(1) {
  background: var(--color-primary);
}
.shape-wrapper > .shape:nth-child(2) {
  background: var(--color-primary-text);
}
.shape-wrapper > .shape:nth-child(3) {
  background: var(--color-secondary);
}
.shape-wrapper > .shape:nth-child(4) {
  background: var(--color-accent);
}
.shape-wrapper > .shape:nth-child(5) {
  background: var(--color-accent-light);
}
.shape-wrapper > .shape:nth-child(6) {
  background: skyblue;
}
.shape-wrapper > .shape:nth-child(7) {
  background: plum;
}

/* Set rectangle position configuration 1 */
.shape-wrapper[data-configuration="1"] > .shape:nth-child(1) {
  top: 0%;
  left: 0%;
  height: 40%;
  width: 20%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(2) {
  top: 40%;
  left: 0%;
  height: 60%;
  width: 40%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(3) {
  top: 0%;
  left: 20%;
  height: 20%;
  width: 40%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(4) {
  top: 20%;
  left: 20%;
  height: 20%;
  width: 40%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(5) {
  top: 40%;
  left: 40%;
  height: 60%;
  width: 40%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(6) {
  top: 0%;
  left: 60%;
  height: 40%;
  width: 40%;
}
.shape-wrapper[data-configuration="1"] > .shape:nth-child(7) {
  top: 40%;
  left: 80%;
  height: 60%;
  width: 20%;
}

/* Set rectangle position configuration 2 */
.shape-wrapper[data-configuration="2"] > .shape:nth-child(1) {
  top: 0%;
  left: 85%;
  height: 60%;
  width: 15%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(2) {
  top: 40%;
  left: 70%;
  height: 60%;
  width: 15%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(3) {
  top: 0%;
  left: 55%;
  height: 60%;
  width: 15%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(4) {
  top: 10%;
  left: 45%;
  height: 80%;
  width: 10%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(5) {
  top: 40%;
  left: 30%;
  height: 60%;
  width: 15%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(6) {
  top: 20%;
  left: 15%;
  height: 60%;
  width: 15%;
}
.shape-wrapper[data-configuration="2"] > .shape:nth-child(7) {
  top: 0%;
  left: 0%;
  height: 60%;
  width: 15%;
}

/* Set rectangle position configuration 3 */
.shape-wrapper[data-configuration="3"] > .shape:nth-child(1) {
  top: 0%;
  left: 0%;
  height: 100%;
  width: 50%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(2) {
  top: 40%;
  left: 0%;
  height: 60%;
  width: 25%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(3) {
  top: 60%;
  left: 0%;
  height: 40%;
  width: 12.5%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(4) {
  top: 0%;
  left: 50%;
  height: 50%;
  width: 16.5%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(5) {
  top: 0%;
  left: 66.5%;
  height: 50%;
  width: 33.5%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(6) {
  top: 0%;
  left: 25%;
  height: 25%;
  width: 75%;
}
.shape-wrapper[data-configuration="3"] > .shape:nth-child(7) {
  top: 50%;
  left: 50%;
  height: 50%;
  width: 50%;
}
</style>
