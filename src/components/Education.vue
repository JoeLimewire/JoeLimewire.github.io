<template>
  <div>
  <h2>Education</h2>
  <div class="banner">
    <div class="wrapper">
      <p>
      <div class="education-level">
        <div class="flex">
          <h3>Manchester Metropolitan University </h3>
          <span class="date">Sep 2017 – Jun 2020</span>
        </div>
        2:1 BSc (Hons): Software Engineering
        <h4> University Highlights</h4>
        <ul class="list">
          <li class="list-item">
            <b>Mobile App Development:</b> Created a secure device network controlling "doors" through RFID validation,
            accompanied by a master key app featuring password-based access. Scaled project for potential client
            presentation.
          </li>
          <li class="list-item">
            <b>Programming languages and SE Frameworks:</b> Gained proficiency in 5 languages (Smalltalk, Python, Javascript,
            Clojure, Haskell) and various industry development environments (Spyder, Atom, BlueJ, etc.).
          </li>
          <li class="list-item">
            <b>Enterprise Programming:</b> Developed a web service using MVC model, implemented SOAP and REST functionality, and
            deployed on Google Cloud Platform. Explored web apps, back-end services, and efficient work methodologies.
          </li>
        </ul>
      </div>

      <Seperator/>

      <div class="education-level">
        <div class="flex">
          <h3>Sir John Deane’s College </h3>
          <span class="date">Sep 2015 – Jun 2017</span>
        </div>
        <ul class="list horizontal">
          <li class="list-item"><b>D*</b> - Applied Science </li>
          <li class="list-item"><b>C</b> - Computing</li>
          <li class="list-item"><b>C</b> - Music Technology</li>
        </ul>
      </div>

      <Seperator/>

      <div class="education-level">
        <div class="flex">
          <h3>The Grange Academy </h3>
          <span class="date">Sep 2010 – Jun 2015</span>
        </div>
        12 GCSE’s:
        <ul class="list horizontal">
          <li class="list-item"><b>A</b> - Computing</li>
          <li class="list-item"><b>B</b> - ICT</li>
          <li class="list-item"><b>B</b> - Mathematics</li>
          <li class="list-item"><b>B</b> - Physics</li>
          <li class="list-item"><b>B</b> - Biology</li>
          <li class="list-item"><b>B</b> - Graphics</li>
          <li class="list-item"><b>B</b> - Music</li>
          <li class="list-item"><b>C</b> - English Language</li>
          <li class="list-item"><b>C</b> - English Literature</li>
          <li class="list-item"><b>C</b> - Geography</li>
          <li class="list-item"><b>D</b> - Chemistry</li>
          <li class="list-item"><b>D</b> - French</li>
        </ul>
        
        *Awarded for the best coursework of the year 2015. Coursework was made in Computing GCSE.
      </div>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import Seperator from './inner-components/Seperator.vue';
export default {
  components: {
    Seperator
  }
}
</script>
<style scoped>
h2 {
  color: var(--color-primary-text);
}

h3 {
  /* display: inline; */
}

.banner {
  display: flex;
  flex-direction: row;
}

.wrapper {
  padding: 1rem;
  margin-bottom: 3rem;
  background: var(--color-background-grey);
  /* width: 50%; */
}

.flex {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.education-level {
  margin-bottom: 1rem;
}

.list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.horizontal{
  /* width: 50%; */
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

.list-item:not(:last-child) {
  margin-bottom: 1rem;
}

.date {
  /* display: inline; */
}</style>
