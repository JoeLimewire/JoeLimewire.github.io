<template>
  <div class="canvas"></div>
</template>
<script>
import Matter from "matter-js";

const canvas = document.querySelector(".canvas");
// console.info(canvas.clientWidth);

let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse;

let engine = Engine.create();

function init() {
  let numm = Math.random();

  const oldCanvas = document.querySelector("canvas");

  if (oldCanvas) oldCanvas.remove();

  var elem = canvas;
  if (!canvas) elem = document.querySelector(".canvas");

  let width = elem.clientWidth;
  let height = elem.clientHeight * 2;
  let vmin = Math.min(width, height);

  engine.events = {};
  World.clear(engine.world);
  Engine.clear(engine);

  engine = Engine.create();

  let render = Render.create({
    element: elem,
    engine: engine,
    options: {
      wireframes: false,
      background: "transparent",
      width: width,
      height: height / 2,
    },
  });

  World.add(engine.world, [
    MouseConstraint.create(engine, {
      mouse: Mouse.create(render.canvas),
      constraint: {
        render: {
          visible: false,
        },
      },
    }),
    Bodies.rectangle(width / 2, height + 50, width, 100, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.rectangle(width / 2, -50, width, 100, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.rectangle(-50, height / 2, 100, height, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.rectangle(width + 50, height / 2, 100, height, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.rectangle(width / 2, height / 2 + 17, vmin * 1.25, vmin * 0.125, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
      },
    }),
    Bodies.rectangle(width / 2, (height / 4) * 3, vmin * 0.37, vmin * 0.131, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.circle(width / 2 - vmin * 0.182, (height / 4) * 3, vmin * 0.065, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
    Bodies.circle(width / 2 + vmin * 0.182, (height / 4) * 3, vmin * 0.065, {
      isStatic: true,
      render: {
        fillStyle: "white",
      },
    }),
  ]);

  for (let i = 0; i < 150; i++) {
    let radius = Math.round(
      10 + (Math.random() * vmin) / (height === 600 ? 160 : 30)
    );
    World.add(
      engine.world,
      Bodies.circle(
        Math.random() * width,
        (Math.random() * height) / 4,
        radius,
        {
          render: {
            fillStyle: [
              "#c0ff33",
              "#9acc29",
              "#e4fbb2",
              "skyblue",
              "#d40c95",
              "#e155b5",
            ][Math.round(Math.random() * 6 - 0.5)],
          },
        }
      )
    );
  }

  console.info(height);

  Engine.run(engine);

  Render.run(render);

  let num = 0;
  function update() {
    engine.world.gravity.x = Math.sin(num / 100);
    engine.world.gravity.y = Math.cos(num / 100);
    num += 0.8;

    const canvas = document.querySelector("canvas");

    requestAnimationFrame(update.bind(this));
  }

  update();
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});

window.addEventListener("resize", function () {
  init();
});
</script>
<style>
.canvas {
  width: 33%;
  /* height: 100%; */
  margin-bottom: 3rem;
}
canvas {
  border: none !important;
  height: 100%;
}

@media only screen and (max-width: 767px) {
  /* MOBILE SIZE */
  .canvas {
    /* width: 100%; */
    min-height: 300px;
  }
}
</style>
