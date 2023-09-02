<template>
  <div>
    <h2>Work <span class="title-highlight">Experience</span></h2>
    <div class="banner">
      <div class="wrapper">
        <div class="education-level">
          <div class="flex">
            <h3>Saffron Interactive</h3>
            <span class="date">Oct 2020 - Current</span>
          </div>
          <div class="saffron">
            Saffron Interactive is a bespoke content learning development
            company that endeavors to create unique solutions for diverse
            companies. As a developer, I have been tasked with various
            assignments, ranging from basics such as creating and deploying
            courses, to working with custom back-ends, APIs and LMS', in order
            to provide the most precise user experience possible.
          </div>
          <ul class="list">
            <li class="list-item">
              <mark>Led the development </mark>and launch of Newgold, a
              managerial learning course developed using React.js and various
              packages. <mark>Implemented interactive storyboards </mark> with
              user decision-based "stock price" dynamics, influencing the course
              score. Designed engaging animations, a scoring system, unique
              navigation, and a
              <mark>comprehensive module grading framework </mark>featuring
              pass, fail, locked, and open states.
            </li>
            <li class="list-item">
              I have led successful development of major projects meeting client
              and company needs. This involved guiding
              <mark>clients in product deployment</mark> through meetings and
              providing comprehensive instructions for future use.
            </li>
            <li class="list-item">
              During webpack bundling, I improved efficiency by
              <mark>addressing wait times of up to 5 minutes</mark>. I took the
              initiative to locally optimize the package size,
              <mark>slashing it from over 250MB to just 26MB</mark>. I
              incorporated Vite for swift hot reloading,
              <mark>dramatically cutting down update times to seconds</mark>.
            </li>
            <li class="list-item">
              I also
              <mark>enjoy working on projects with other developers</mark>,
              making sure we are all communicating clearly and helping each
              other with any challenging problems that arise.
            </li>
            <li class="list-item">
              For a significant Saffron project, I developed a React.js based
              <mark
                >filter bar that seamlessly integrated with various APIs,
                internal filters, and customized layouts</mark
              >. This involved creating programmatically tailored components
              linked to API results, maintaining a uniform UI across
              applications. Additionally, I fine-tuned an
              <mark>AI video coaching feature</mark>, aligning its content more
              closely with the current context using cues. For implementation, I
              employed Laravel and Vue on the backend.
            </li>
          </ul>
        </div>

        <div class="education-level">
          <div class="flex">
            <h3>Barnabas Homeless Charity</h3>
            <span class="date">Jan 2019 - Mar 2019</span>
          </div>
          I joined this charity to contribute to Manchester's homeless community
          and be an active part of our local humanity. With two shifts per week,
          I assisted at a homeless shelter, providing clothing, distributing
          meal tickets, and liaising with our medical team to address health
          concerns. This experience enabled me to engage with the homeless,
          understand their stories, and offer support where it mattered most.
        </div>
        <div class="education-level">
          <div class="flex">
            <h3>KFC</h3>
            <span class="date">Jan 2016 - June 2016</span>
          </div>
          I was a crew member, where my role varied per shift. These roles
          included preparing food, cleaning while the kitchen was in use,
          handling money at the till, and taking orders. I was comfortable
          working within a fast-paced environment where every day was different
          and presented new challenges.
        </div>
        <div class="education-level">
          <div class="flex">
            <h3>National Citizenship Service</h3>
            <span class="date">July 2015 - Aug 2015</span>
          </div>
          I coordinated a charity raffle for Macmillan Cancer Support, involving
          local businesses in Warrington that donated prizes. We successfully
          generated over £200 for the cause, which we utilized to purchase
          garden supplies for refurbishing the Halton Hospital garden.
        </div>
      </div>
      <ShapeFall />
    </div>
  </div>
</template>
<script>
import ShapeFall from "./inner-components/ShapeFall.vue";
export default {
  components: {
    ShapeFall,
  },
};
</script>
<style scoped>
mark {
  background: var(--color-tertiary-light);
  /* color: white; */
}
.saffron {
  /* color: black; */
  backdrop-filter: blur(10px);
  background: var(--color-background-grey-dark);
  margin: 0 -1rem;
  padding: 1rem 2rem;
  /* border-radius: var(--border-radius); */
  /* border: var(--color-primary-text) 2px solid; */
  /* padding: 1rem; */
}
.banner {
  display: flex;
  flex-direction: row;
}

.title-highlight {
  color: var(--color-accent);
}

.wrapper {
  padding: 1rem;
  margin-bottom: 3rem;
  width: 66%;
  background-color: var(--color-background-grey);
}

.flex {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.list-item {
  margin-bottom: 1rem;
}

.education-level {
  margin-bottom: 1rem;
}

@media only screen and (max-width: 767px) {
  /* MOBILE SIZE */
  .wrapper {
    width: fit-content;
    margin-bottom: 0px;
  }

  .banner {
    flex-direction: column;
  }
}
</style>
