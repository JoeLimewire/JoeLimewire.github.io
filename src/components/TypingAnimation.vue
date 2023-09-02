<template>
  <div class="typing-effect">
    <h2 class="text" id="typing-text">
      {{ currentText }}
      <br />
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phrases: [
        `<span id="front-end"> Front-end </span>  Developer`,
        `Back-end Developer`,
        "Developer",
        `<span id="full-stack">Fullstack</span> Engineer`,
        `Software Engineer`,
        `<span id="vue">Vue.js</span> is awesome!`,
        "🐸🐸",
      ],
      currentPhraseIndex: 0,
      currentText: "",
      currentIndex: 0,
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      if (this.currentPhraseIndex >= this.phrases.length - 1) {
        this.currentPhraseIndex = 0;
      }
      this.typingInterval = setInterval(() => {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        const nextPhrase = this.phrases[this.currentPhraseIndex + 1];
        const typingTextElement = document.querySelector("#typing-text");

        if (this.currentIndex <= currentPhrase.length) {
          this.currentText = currentPhrase.substring(0, this.currentIndex);
          typingTextElement.innerHTML =
            this.currentText + `<span class="caret">|</span>`;
          this.currentIndex++;
        } else {
          clearInterval(this.typingInterval);
          setTimeout(() => {
            // Finished writing out phrase
            const commonSubstring = this.findCommonSubstring(
              currentPhrase,
              nextPhrase
            );

            if (commonSubstring.length > 5) {
              // Select difference of text
              setTimeout(() => {
                const phraseToHighlight = currentPhrase.replace(
                  commonSubstring,
                  ""
                );
                const nextPhraseDifference = nextPhrase.replace(
                  commonSubstring,
                  ""
                );

                typingTextElement.innerHTML = `${phraseToHighlight}<span class="caret">|</span>${commonSubstring}`;

                setTimeout(() => {
                  typingTextElement.innerHTML = `<span class="caret">|</span><span class="highlight">${phraseToHighlight}</span> ${commonSubstring}`;
                  // Delete and write out difference in next phrase
                  setTimeout(() => {
                    typingTextElement.innerHTML = `<span class="caret">|</span>${commonSubstring}`;
                    this.typeOutString(
                      nextPhraseDifference,
                      typingTextElement,
                      () => {
                        typingTextElement.innerHTML = `<span id="${nextPhraseDifference.toLowerCase()}">${nextPhraseDifference}</span>${commonSubstring}<span class="caret">|</span>`;

                        this.currentPhraseIndex++;
                        //Skip next phrase and type out word
                        setTimeout(() => {
                          this.startTyping();
                        }, 500);
                      }
                    );
                  }, 1000);
                }, 1000);
              }, 1000);
            } else {
              this.deleteText();
            }
          }, 1000);
        }
      }, 100);
    },

    deleteText() {
      const typingTextElement = document.querySelector("#typing-text");
      this.typingInterval = setInterval(() => {
        if (this.currentIndex >= 0) {
          this.currentText = this.phrases[this.currentPhraseIndex].substring(
            0,
            this.currentIndex
          );
          typingTextElement.innerHTML = this.currentText;
          this.currentIndex--;
        } else {
          clearInterval(this.typingInterval);
          this.currentPhraseIndex =
            (this.currentPhraseIndex + 1) % this.phrases.length;
          this.startTyping();
        }
      }, 50);
    },

    typeOutString(text, elem, callback) {
      var newString = "";
      for (var i = text.length - 1; i >= 0; i--) {
        newString += text[i];
      }
      text = newString;

      let currentIndex = 0;
      let writeText = ""; // Reset currentText

      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          // Append the next character to currentText
          writeText += text.charAt(currentIndex);
          elem.prepend(writeText.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          if (callback && typeof callback === "function") {
            callback();
          }
        }
      }, 100);
    },

    findCommonSubstring(str1, str2) {
      const table = Array(str1.length + 1)
        .fill(null)
        .map(() => Array(str2.length + 1).fill(0));
      let maxLength = 0;
      let endIndex = 0;

      for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
          if (str1[i - 1] === str2[j - 1]) {
            table[i][j] = table[i - 1][j - 1] + 1;
            if (table[i][j] > maxLength) {
              maxLength = table[i][j];
              endIndex = i - 1;
            }
          } else {
            table[i][j] = 0;
          }
        }
      }

      if (maxLength === 0) {
        return "none";
      }

      return str1.substr(endIndex - maxLength + 1, maxLength);
    },
  },
  beforeUnmount() {
    clearInterval(this.typingInterval);
  },
};
</script>

<style>
#front-end {
  background: linear-gradient(120deg, var(--color-primary), #0e1401);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#back-end {
  background: linear-gradient(120deg, var(--color-accent), #0e1401);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#next-phrase {
  text-decoration: line-through;
  text-decoration-color: red;
}

#full-stack {
  animation: bloat 1s ease-out;
  animation-delay: 1s;
}

#software {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: gold;
}

#musician {
  /* text-decoration-line: underline; */
  text-decoration-style: line-through;
  text-decoration-color: red;
}

#vue {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-effect {
  /* font-family: monospace; */
  /* font-size: 18px; */
  min-height: 4rem;
  min-width: 100%;
  /* border: 1px solid blue; */
}

.text {
  display: inline-block;
}

.caret {
  display: inline-block;
  animation: blink-caret 1s infinite steps(1);
  padding: 0px;
  /* border: 1px solid pink; */
  display: inline;
}

.highlight {
  height: 20px;
  background-color: var(--color-secondary);
  color: white;
}

.highlight #front-end {
  -webkit-text-fill-color: white;
}

@keyframes blink-caret {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes bloat {
  100% {
    text-shadow: 0px 0px 20px var(--color-accent);
  }
}
</style>
