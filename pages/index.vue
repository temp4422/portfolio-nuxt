<i18n>
{
  "en": {
    "quote-intro": "It is an exciting time to work on the web. The pace of change is daunting, but there is great opportunity for those with open, curious minds.",
    "h1-works": "PROJECTS",
    "x-drive.ua": "X-drive.ua - smooth and fast on top of futuristic frameworks",
    "artful-portfolio": "Artful portfolio",
    "interactive-playground": "An interactive playground",
    "h1-about": "ABOUT",
    "about-text1": "Building responsive mobile first websites.",
    "about-text2": "You can't build what you can't imagine. Therefore, with modern web technologies, you can build what ever you want.",
    "about-text3": "Learning and working with JAMstack - most rapid and advanced web technologies stack for increased speed and reliability."
  },
  "uk": {
    "quote-intro": "Це захоплюючий час для роботи у вебі. Швидкість змін лякаюча, але водночас це можливості для тих, хто має відjкритий і допитливий розум.",
    "h1-works": "ПРОЄКТИ",
    "x-drive.ua": "X-drive.ua - плавний і швидкий поверх футуристичних фреймворків",
    "artful-portfolio": "Художнє портфоліо",
    "interactive-playground": "Інтерактивний майданчик",
    "h1-about": "ПРО",
    "about-text1": "Створення адаптивних веб-сайтів для мобільних пристроїв.",
    "about-text2": "Ви не можете побудувати те, що не можете уявити. За допомогою сучасних веб-технологій ви можете створювати все, що завгодно.",
    "about-text3": "Робота з JAMstack - найшвидшим і передовим стеком веб-технологій для підвищення швидкості та надійності."
  }
}
</i18n>

<style>
/****************************** SECTIONS ******************************/
/* SECTION-HOME */
.section-home {
  display: grid;
  padding-bottom: 20rem;
}
.typewriter-container {
  display: grid;
  place-items: center;
  height: 4rem;
  margin: 30vh 0;
  overflow: hidden;
}
.quote-intro {
  margin: 25% 0 0 0;
}

/* SECTION-WORKS */
.section-works {
  display: grid;
}
.h1-works {
  margin: 0;
}
.works-container {
  max-width: 30rem;
  padding: 2rem;
  display: grid;
  place-items: center;
  gap: 1rem;
  overflow: hidden;
}
.work-item {
  height: 12rem;
  margin: 4rem 0 0 0;
  border-radius: 20px;
  overflow: hidden;
  transition: var(--nav-transition-time-out);
  filter: var(--shadow-main-item);
}
.work-item:hover {
  transition: var(--nav-transition-time-in);
  filter: var(--shadow-small);
}
.work-item__div {
  overflow: hidden;
}

/* SECTION-ABOUT */
.section-about {
  display: grid;
}
.about-text {
  margin-bottom: 4rem;
}
.about-web {
  margin: 4rem;
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  place-content: space-evenly;
}
.about-web__svg {
  height: auto;
  width: 3rem;
}
.jamstack-logo {
  transition: var(--transition-main-out);
  filter: var(--jamstack-logo);
  height: auto;
  margin: 4rem 0 0 0;
  border-radius: var(--border-radius);
}
.jamstack-logo:hover {
  transition: var(--transition-main-in);
  filter: var(--jamstack-logo-hover);
}
</style>

<template>
  <main class="main">
    <!-- HOME -->
    <section class="section section-home" id="home">
      <div class="typewriter-container">
        <h1
          class="h1 typewriter"
          data-wait="1000"
          data-words="['Вітання!', 'Greetings!', 'Les salutations!', 'Grüße!', 'Saluti!', '问候！', 'Приветствие!', '!سلام تحية', 'Saluto!', 'Salutació!', '!דְרִישַׁת שָׁלוֹם', 'Salom!', '¡Saludo!', 'ຊົມເຊີຍ!', '挨拶！', 'გამარჯობა!', 'Powitanie!', 'Beannacht!', 'Hilsen!', 'Hälsning!', 'Мэндчилгээ!', 'Pozdrav!', 'Üdvözlet!', 'Salut!', 'Sveikinu!', 'Salam!', 'Salutem!', 'تبریک!', 'Saudações!', 'Lep pozdrav!', 'S pozdravom!', 'Kwaziso!', 'Salaan!', 'Χαιρετισμός!', 'Salamlayıram!', 'Поздрав!', 'Aloha!', 'शुभकामना!', 'Kveðja!', 'Прывітанне!']"
        >
          <!-- Greetigns! -->
        </h1>
      </div>
      <p class="p p-center quote-intro js-scroll fade-in-bottom" v-html="$t('quote-intro')"></p>
    </section>

    <!-- WORKS -->
    <section class="section section-works" id="works">
      <h1 class="h1 h1-works" v-html="$t('h1-works')"></h1>
      <div class="works-container">
        <a aria-label="Link to different domain" class="a work-item" href="https://www.x-drive.ua/">
          <div class="work-item__div work-item__x-drive">
            <!-- <img class="img" src="~/assets/img/jpg/x-drive.jpg" width="1280" height="720" alt="x-drive" /> -->
            <nuxt-picture class="img" src="/img/jpg/x-drive.jpg" width="1280" height="720" alt="x-drive" />
          </div>
        </a>
        <p class="p-center js-scroll fade-in-bottom" v-html="$t('x-drive.ua')">X-drive.ua - smooth and fast on top of futuristic frameworks</p>

        <a aria-label="Link to different domain" class="a work-item" href="https://solomia-portfolio.netlify.app/">
          <div class="work-item__div work-item__solomia">
            <nuxt-picture class="img" src="/img/jpg/solomia.jpg" width="1280" height="720" alt="solomia-portfolio" />
          </div>
        </a>
        <p class="p-center js-scroll fade-in-bottom" v-html="$t('artful-portfolio')"></p>

        <a aria-label="Link to different domain" class="a work-item" href="/playground">
          <div class="work-item__div work-item__playground">
            <nuxt-picture class="img playground-img" src="/img/jpg/playground.jpg" width="1280" height="720" alt="playground" />
          </div>
        </a>
        <p class="test2 p-center js-scroll fade-in-bottom" v-html="$t('interactive-playground')"></p>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section section-about" id="about">
      <h1 class="h1 h1-about" v-html="$t('h1-about')"></h1>
      <p class="p-center about-text" v-html="$t('about-text1')"></p>
      <div class="about-web">
        <div class="svg about-web__svg js-scroll fade-in">
          <svg fill="none" height="100" width="87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.532">
            <path d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" />
            <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
            <path
              d="m99.49 41.362 1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="svg about-web__svg js-scroll fade-in-delay-2">
          <svg fill="none" height="100" width="87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53">
            <path d="M10.383 126.892 0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
            <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
            <path
              d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
              fill="#fff"
            />
          </svg>
        </div>
        <div class="svg about-web__svg js-scroll fade-in-delay-3">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
            <path fill="#f7df1e" d="M0 0h630v630H0z" />
            <path
              d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
            />
          </svg>
        </div>
      </div>
      <p class="p" v-html="$t('about-text2')"></p>
      <a aria-label="Link to different domain" href="https://jamstack.org/" class="svg jamstack-logo js-scroll fade-in">
        <svg width="602" height="173" viewBox="150 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h602v173H0z" />
          <path
            d="M196.8 89.487v-35.76h-15.12v39.52c0 3.28-.24 7.52-4.56 7.52-3.84 0-4.4-3.92-4.56-6.88h-16.08c0 8.64 3.52 15.68 11.92 18.72 2.48.96 5.28 1.44 8 1.44 6.32 0 12.72-2.8 16.72-7.76 3.68-4.64 3.68-11.12 3.68-16.8Zm55.328 23.44v-44.4h-13.28v4.72h-.16c-2.64-4.4-8.08-6.24-12.96-6.24-13.36 0-22.32 10.72-22.32 23.68 0 13.2 8.64 23.76 22.32 23.76 4.8 0 10.56-1.76 12.96-6.32h.16v4.8h13.28Zm-13.28-22.24c0 6.4-4.64 11.36-11.12 11.36-6.24 0-11.04-5.04-11.04-11.2 0-6.32 4.48-11.44 10.96-11.44s11.2 4.8 11.2 11.28Zm91.128 22.24v-24.24c0-6.8.24-12.08-4.8-17.2-3.12-3.2-7.28-4.48-11.68-4.48-6 0-10.88 2.88-14.08 7.92-2.72-5.04-7.04-7.92-12.8-7.92-5.04 0-9.68 1.68-12.24 6.24h-.16v-4.72h-12.4v44.4h13.28v-23.6c0-5.2 1.36-9.84 7.52-9.84 5.6 0 6.64 4.72 6.64 9.28v24.16h13.28v-24.24c0-5.04 1.44-9.2 7.36-9.2 6.16 0 6.8 4.96 6.8 9.84v23.6h13.28Zm42.62-13.6c0-15.68-22.32-11.76-22.32-18.72 0-2 2-2.96 3.76-2.96 2.32 0 4.08.88 4.16 3.36h13.04c-.88-9.44-8.16-14-17.04-14-8.56 0-17.2 5.36-17.2 14.64 0 6.24 5.28 9.68 10.56 11.6 1.92.72 3.84 1.36 5.76 2 2.4.96 6 1.92 6 5.12 0 2.32-2.64 3.44-4.64 3.44-2.64 0-4.64-1.36-5.04-4.08h-13.2c1.04 9.76 8.8 14.72 18.08 14.72 9.04 0 18.08-5.12 18.08-15.12Zm28.962-20.72v-10.08h-6.4v-14.8h-13.28v14.8h-6.56v10.08h6.56v34.32h13.28v-34.32h6.4Zm51.195 34.32v-44.4h-13.28v4.72h-.16c-2.64-4.4-8.08-6.24-12.96-6.24-13.36 0-22.32 10.72-22.32 23.68 0 13.2 8.64 23.76 22.32 23.76 4.8 0 10.56-1.76 12.96-6.32h.16v4.8h13.28Zm-13.28-22.24c0 6.4-4.64 11.36-11.12 11.36-6.24 0-11.04-5.04-11.04-11.2 0-6.32 4.48-11.44 10.96-11.44s11.2 4.8 11.2 11.28Zm67.848 5.36h-13.52c-2 3.84-5.2 5.92-9.6 5.92-6.48 0-10.56-5.04-10.56-11.28 0-6 3.84-11.28 10.24-11.28 4.56 0 8 2.08 9.92 6.24h13.44c-2.32-11.28-12.16-18.64-23.52-18.64-13.2 0-23.44 10.48-23.44 23.6 0 13.28 10.48 23.76 23.76 23.76 11.2 0 20.72-7.44 23.28-18.32Zm48.135-27.52h-15.76l-12.32 16.08h-.16v-30.88h-13.28v59.2h13.28v-21.36h.16l12.56 21.36h15.04l-16.24-24.88 16.72-19.52Z"
            fill="#fff"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M81.7 38.23c-26.802 0-48.47 21.668-48.47 48.47s21.668 48.47 48.47 48.47 48.47-21.668 48.47-48.47V38.23H81.7Zm-2.067 83.429c-17.719-1.012-31.947-15.24-32.959-32.959h32.96v32.959ZM83.7 88.767h32.959c-1.012 17.719-15.24 31.947-32.959 32.959v-32.96Zm0-37.136h33.003v33.002H83.7V51.631Z"
            fill="#fff"
          />
        </svg>
      </a>
      <p class="p" v-html="$t('about-text3')"></p>
    </section>
  </main>
</template>

<script scoped>
export default {
  mounted() {
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement
        this.words = words
        this.txt = ''
        this.wordIndex = 0
        this.wait = parseInt(wait, 10)
        this.type()
        this.isDeleting = false
      }

      type() {
        // Current index of word
        const current = this.wordIndex % this.words.length
        // Get full text of current word
        const fullTxt = this.words[current]

        // Check if deleting
        if (this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

        // Initial Type Speed
        let typeSpeed = 200

        if (this.isDeleting) {
          typeSpeed /= 2.5
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait
          // Set delete to true
          this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false
          // Move to next word
          this.wordIndex++
          // Pause before start typing
          typeSpeed = 500
        }
        setTimeout(() => this.type(), typeSpeed)
      }
    }
    // Init App
    function init() {
      const txtElement = document.querySelector('.typewriter')
      const preWords = txtElement.getAttribute('data-words').replace(/'/gi, '"')
      const words = JSON.parse(preWords)
      const wait = txtElement.getAttribute('data-wait')
      // Add cursor
      const cursor = document.createElement('style')
      cursor.type = 'text/css'
      cursor.innerHTML =
        '.typewriter > .txt {border-right: 0.05em solid; animation: caret 1s steps(1) infinite;} @keyframes caret {50% {border-color: transparent;}} '
      document.body.appendChild(cursor)
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait)
    }
    // setTimeout(() => init(), 2000)
    // init()
    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', testTime())
    function testTime() {
      setTimeout(() => init(), 1500)
    }
  },
}
</script>
