<style scoped>
/* * {
  border-radius: 8px;
}
.object-3d {
  border-radius: 20px;
  margin: 10rem auto;
  height: 20rem;
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
  margin: 1rem 0;
  max-width: 10rem;
  height: 2rem;
}
.guess-number__form__submit {
  display: block;
  margin: 1rem 0;
  max-width: 10rem;
  height: 2rem;
}

.guess-number__results {
  min-width: 10rem;
  width: 60%;
  margin: 2rem 0;
  display: grid;
  place-items: center;
}
.guess-number__results__guesses {
  min-height: 2rem;
}
.guess-number__results__last-result {
  height: auto;
}
.guess-number__results__low-or-hi {
  height: auto;
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
} */
</style>

<template>
  <main class="main">
    <h1 class="content-center text-center text-4xl m-5 p-10">PLAYGROUND</h1>
    <!-- <model-viewer class="object-3d" alt="object" src="/x-drive.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls> </model-viewer> -->

    <!-- <section class="section section-guess-number">
      <h1 class="h1">GUESS NUMBER 1.0</h1>
      <p class="p">Guess a random number between 1 and 100. Can you ?</p>
      <div class="form guess-number__form">
        <label class="guess-number__form__label" for="guessField">Enter a guess: </label>
        <input class="guessField guess-number__form__input" type="text" id="guessField" />
        <input class="guessSubmit guess-number__form__submit" type="submit" value="Guess!" />
      </div>

      <div class="resultParas guess-number__results">
        <p class="guesses guess-number__results__guesses"></p>
        <p class="lastResult guess-number__results__last-result"></p>
        <p class="lowOrHi guess-number__results__low-or-hi"></p>
      </div>

      <p class="p p-easter" onclick="alert('Well, try to guess anything else? ... mayby t3rC3S ... ')">Did you find easter ?</p>
    </section> -->

    <section class="section section-guess-number">
      <h1 class="text-center text-3xl m-10 text-green-500" style="">GUESS NUMBER GAME 1.0</h1>
      <p class="text-center m-4">Guess a random number between 1 and 100. Can you ?</p>
      <div class="form guess-number__form m-10 grid gap-2 justify-center justify-items-center">
        <label class="guess-number__form__label" for="guessField">Enter a guess: </label>
        <input class="guessField guess-number__form__input max-w-30rem bg-bg-gray-500 rounded-xl" type="text" id="guessField" />
        <input class="guessSubmit guess-number__form__submit bg-bg-gray-700 text-green-800 text-shadow-lg text-2xl rounded-xl" type="submit" value="Guess!" />
      </div>

      <div class="resultParas guess-number__results grid m-10">
        <p class="guesses guess-number__results__guesses"></p>
        <p class="lastResult guess-number__results__last-result"></p>
        <p class="lowOrHi guess-number__results__low-or-hi"></p>
      </div>

      <p class="text-center" onclick="alert('Well, try to guess anything else? ... mayby t3rC3S ... ')">Did you find easter ?</p>
    </section>

    <!-- <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script> -->
  </main>
</template>

<script scoped>
export default {
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
      console.log(userGuess)
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
        lastResult.style.backgroundColor = 'red'
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
    guesses.style.backgroundColor = 'indigo'
    guesses.style.fontSize = '200%'
    guesses.style.padding = '10px'
    guesses.style.boxShadow = '3px 3px 6px black'
  },
}
</script>
