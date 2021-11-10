<i18n>
{
  "en": {
    "h1-playground": "PLAYGROUND",
    "h2-play-3d": "Play with 3D object",
    "h2-guess-number": "GUESS NUMBER 1.0",
    "guess-num": "Guess a random number between 1 and 100.<br />Can you?",
    "enter-guess": "Enter a guess:",
    "easter": "Did you find easter?"
  },
  "uk": {
    "h1-playground": "ІГРОВИЙ МАЙДАНЧИК",
    "h2-play-3d": "Грайте з 3D-об'єктом",
    "h2-guess-number": "ВІДГАДАЙТЕ ЧИСЛО 1.0",
    "guess-num": "Вгадайте випадкове число від 1 до 100.<br /> Зможете?",
    "enter-guess": "Введіть припущення:",
    "easter": "Ви знайшли секрет?"
  }
}
</i18n>
<style scoped>
/* General */
* {
  border-radius: 8px;
}
.object-3d {
  border-radius: 20px;
  margin: 2rem auto;
  height: 20rem;
}
.h1-playground {
  margin: 4rem 0;
}
.h2-play-3d {
  margin: 2rem 0;
}
.h2-guess-number {
  margin: 4rem 0 2rem 0;
}
.p-guess {
  text-align: center;
}
.section-guess-number {
  height: auto;
  display: grid;
  place-items: center;
}
.guess-number__form {
  display: grid;
  place-items: center;
}
.guess-number__form__label {
  text-align: center;
  height: auto;
  margin: 0 0 1rem 0;
}
.guess-number__form__input {
  margin: 0.5rem 0;
  padding: 0.5rem;
  max-width: 10rem;
  height: 2rem;
  background: #b8b8b8;
  color: #202020;
  filter: var(--shadow-small);
}
.guess-number__form__submit {
  display: block;
  margin: 0.5rem 0;
  max-width: 10rem;
  height: 2rem;
  background: var(--color-second);
  color: #202020;
  cursor: pointer;
  filter: var(--shadow-small);
  transition: var(--transition-main-in);
  font-weight: bold;
}
.guess-number__form__submit:hover {
  filter: var(--shadow-hover);
  transition: var(--transition-main-out);
}
.guess-number__results {
  margin: 0.5rem 0;
  display: grid;
  place-items: center;
  display: grid;
  place-items: center;
  place-content: center;
}
.guess-number__results__last-result {
  height: auto;
  width: 10rem;
  text-align: center;
  margin: 0.5rem;
  background: red;
  filter: var(--shadow-small);
  color: var(--bg);
  transition: var(--transition-main-in);
}
.guess-number__previous__guesses {
  height: auto;
  width: auto;
  min-width: 10rem;
  margin: 0.5rem;
  text-align: center;
  background: #cecece38;
  filter: var(--shadow-small);
}
.guess-number__results__low-or-hi {
  height: auto;
  width: 10rem;
  margin: 0.5rem;
  text-align: center;
  background: #cecece38;
  filter: var(--shadow-small);
}
.p-easter {
  height: auto;
  max-width: 10rem;
  max-height: 3rem;
  opacity: 0;
  cursor: pointer;
}
.p-easter:hover {
  opacity: 1;
}
</style>

<template>
  <main class="main">
    <h1 class="h1 h1-playground" v-html="$t('h1-playground')"></h1>
    <section class="section section-play-3d">
      <h2 class="h2 h2-play-3d" v-html="$t('h2-play-3d')"></h2>

      <!-- <model-viewer class="object-3d" alt="object" src="/x-drive.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls></model-viewer> -->
    </section>

    <section class="section section-guess-number">
      <h2 class="h2 h2-guess-number" v-html="$t('h2-guess-number')"></h2>
      <p class="p p-guess" v-html="$t('guess-num')"></p>
      <div class="form guess-number__form">
        <label class="guess-number__form__label" for="guessField" v-html="$t('enter-guess')"></label>
        <input class="guessField guess-number__form__input" type="text" id="guessField" />
        <input class="guessSubmit guess-number__form__submit" type="submit" value="Guess!" />
      </div>

      <div class="resultParas guess-number__results">
        <p class="lastResult guess-number__results__last-result"></p>
        <p class="guesses guess-number__previous__guesses"></p>
        <p class="lowOrHi guess-number__results__low-or-hi"></p>
      </div>

      <p class="p p-easter" onclick="alert('Well, try to guess anything else? ... mayby t3rC3S ... ')" v-html="$t('easter')"></p>
    </section>

    <!-- <script defer type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script> -->
  </main>
</template>

<script scoped>
export default {
  head() {
    return {
      script: [
        // {
        //   type: 'module',
        //   src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js',
        //   body: true,
        //   async: true,
        //   defer: true,
        // },
      ],
    }
  },
  mounted() {
    // Your JavaScript goes here
    let randomNumber = Math.floor(Math.random() * 100) + 1

    const guesses = document.querySelector('.guesses')
    const lastResult = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')

    const guessSubmit = document.querySelector('.guessSubmit')
    const guessField = document.querySelector('.guessField')

    let guessCount = 1
    let resetButton

    function checkGuess() {
      let userGuess = Number(guessField.value)
      if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: '
      }
      guesses.textContent += userGuess + ' '
      if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!'
        lastResult.style.backgroundColor = 'green'
        lowOrHi.textContent = ''
        setGameOver()
      } else if (userGuess === 999) {
        lastResult.textContent = '!!! CONGRATULATIONS! YOU GOT THE SECRET! !!!'
        lastResult.style.backgroundColor = 'orange'
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!'
        setGameOver()
      } else {
        lastResult.textContent = 'Wrong!'
        // lastResult.style.backgroundColor = 'red'
        if (userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!'
        } else if (userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!'
        }
      }

      guessCount++
      guessField.value = ''
      guessField.focus()
    }

    guessSubmit.addEventListener('click', checkGuess)

    function setGameOver() {
      guessField.disabled = true
      guessSubmit.disabled = true
      resetButton = document.createElement('button')
      resetButton.textContent = 'Start new game'
      document.body.append(resetButton)
      resetButton.addEventListener('click', resetGame)
    }

    function resetGame() {
      guessCount = 1

      const resetParas = document.querySelectorAll('.resultParas p')
      for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ''
      }

      resetButton.parentNode.removeChild(resetButton)

      guessField.disabled = false
      guessSubmit.disabled = false
      guessField.value = ''
      guessField.focus()

      lastResult.style.backgroundColor = 'white'

      randomNumber = Math.floor(Math.random() * 100) + 1
    }

    // Styling
    // guesses.style.backgroundColor = 'indigo'
    // guesses.style.fontSize = '200%'
    // guesses.style.padding = '10px'
    // guesses.style.boxShadow = '3px 3px 6px black'
  },
}
</script>
