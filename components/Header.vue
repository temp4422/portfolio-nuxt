<style>
.nav__panel {
  position: fixed;
  top: 0;
  right: -100%;
  background: var(--nav__panel);
  transition: var(--nav-transition-time-in) ease-out;
  padding: 8rem 0 0 0;
  z-index: 200;
  backdrop-filter: blur(2px);
  display: grid;
  grid-template: minmax(max-content, 1fr) max-content / 1fr;
  gap: var(--nav-links-gap);
  place-items: start center;
  overflow-y: auto;
  transition: 1s ease;
}
.show-nav__panel {
  right: 0;
  transition: calc(var(--nav-transition-time-out) / 1.5) ease;
}
.nav__panel__top {
  height: auto;
  display: grid;
  place-items: center;
  place-content: center;
  overflow: hidden;
}
.nav__panel__bottom {
  height: auto;
  display: grid;
  grid-template: 1fr / 1fr;
  grid-auto-flow: column;
  justify-content: space-between;
  place-items: center;
  overflow: hidden;
  padding: 1rem;
}
.nav__link {
  text-decoration: none;
  overflow: hidden;
  margin: 1rem;
}
.nav__svg {
  display: grid;
  place-items: center;
  place-content: center;
  overflow: hidden;
  filter: var(--nav__svg);
}
.nav__svg-hover {
  filter: var(--nav__svg-hover);
}
.language-svg {
  justify-self: start;
  width: 3rem;
  transition: var(--nav-transition-time-in);
}
.language-svg:active {
  transition: var(--nav-transition-time-out);
  opacity: 0;
}
.moon-svg {
  animation: unhide 1s ease both;
}
.sun-svg {
  transform: translateX(100%);
  animation: unhide 1s ease both;
}
.hide {
  animation: hide 1s ease both;
}
/* Theme switch button animation */
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(200%);
  }
}
@keyframes unhide {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Navigation menu button animation */
.nav__menu {
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  align-content: space-evenly;
  gap: 0.5rem;
  width: 4rem;
  height: 4.1rem;
  background: rgba(186, 186, 186, 0.377);
  margin: 2rem;
  padding: 0.5rem;
  border-radius: 25%;
  animation: menu-spin-back var(--nav-transition-time-in) ease-in-out;
  animation-fill-mode: forwards;
  backdrop-filter: blur(2px);
  border: none;
  z-index: 300;
  cursor: pointer;
  transition: var(--transition-main-out); /* box shadow animation on hover*/
  filter: var(--shadow-big);
}
.nav__menu:hover {
  transition: var(--transition-main-in);
  filter: var(--shadow-hover);
}
@media (min-width: 768px) {
  .nav__panel {
    width: 25vw;
    border-radius: 20px 0 0 20px;
  }
}
.nav__menu__line {
  height: 0.5rem;
  background: #000;
  border-radius: var(--border-radius);
  /* background: var(--bg); */
  /* border: 1px solid #fff; */
}
.nav__menu__line:nth-child(1) {
  transition: var(--nav-transition-time-in);
  transform: rotate(0) translate(0);
}
.nav__menu__line:nth-child(2) {
  opacity: 1;
  transition: var(--nav-transition-time-in);
  transform: rotate(0);
}
.nav__menu__line:nth-child(3) {
  transition: var(--nav-transition-time-in);
  transform: rotate(0) translate(0);
}
.show-nav__menu .nav__menu__line:nth-child(1) {
  transition: var(--nav-transition-time-out);
  transform: rotate(45deg) translate(0.8rem, 0.8rem);
}
.show-nav__menu .nav__menu__line:nth-child(2) {
  opacity: 0;
  transition: var(--nav-transition-time-out);
  transform: rotate(360deg);
}
.show-nav__menu .nav__menu__line:nth-child(3) {
  transition: var(--nav-transition-time-out);
  transform: rotate(-45deg) translate(0.8rem, -0.9rem);
}
.show-nav__menu {
  animation: menu-spin var(--nav-transition-time-out) cubic-bezier(0.8, -0.07, 0.05, 1.8);
  animation-fill-mode: forwards;
}
@keyframes menu-spin {
  0% {
    border-radius: 25%;
  }
  50% {
    border-radius: 100%;
  }
  100% {
    border-radius: 100%;
    transform: rotate(360deg);
  }
}
@keyframes menu-spin-back {
  0% {
    border-radius: 100%;
  }
  50% {
    border-radius: 50%;
  }
  100% {
    border-radius: 25%;
    transform: rotate(-180deg);
  }
}
</style>

<template>
  <header class="header" id="header">
    <nav class="nav">
      <button class="nav__menu" aria-label="Menu button">
        <div class="nav__menu__line"></div>
        <div class="nav__menu__line"></div>
        <div class="nav__menu__line"></div>
      </button>
      <div class="nav__panel">
        <div class="nav__panel__top">
          <NuxtLink aria-label="Link to page id" class="a nav__link" to="/#home" @click.native="scrollTo('#home')">
            <div class="svg nav__svg home-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M6 26h2v14c0 2.206 1.794 4 4 4h24c2.206 0 4-1.794 4-4V26h2a2 2 0 0 0 1.414-3.414l-18-18a1.998 1.998 0 0 0-2.828 0l-18 18A2 2 0 0 0 6 26Zm14 14V30h8v10h-8Zm4-31.172 12 12V30l.002 10H32V30c0-2.206-1.794-4-4-4h-8c-2.206 0-4 1.794-4 4v10h-4V20.828l12-12Z"
                  fill="#202020"
                />
              </svg></div
          ></NuxtLink>
          <NuxtLink aria-label="Link to page id" class="a nav__link" to="/#works" @click.native="scrollTo('#works')">
            <div class="svg nav__svg work-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34 14a6 6 0 0 0-6-6h-8a6 6 0 0 0-6 6h-2a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V20a6 6 0 0 0-6-6h-2Zm-6-2h-8a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2Zm-16 6h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V20a2 2 0 0 1 2-2Z"
                  fill="#202020"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink aria-label="Link to page id" class="a nav__link" to="/#about" @click.native="scrollTo('#about')">
            <div class="svg nav__svg about-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h48v48H0z" />
                <path
                  d="M3 14.25A5.252 5.252 0 0 1 8.25 9h31.5A5.252 5.252 0 0 1 45 14.25v19.5A5.25 5.25 0 0 1 39.75 39H8.25A5.25 5.25 0 0 1 3 33.75v-19.5ZM8.25 12A2.25 2.25 0 0 0 6 14.25v19.5A2.25 2.25 0 0 0 8.25 36h31.5A2.25 2.25 0 0 0 42 33.75v-19.5A2.25 2.25 0 0 0 39.75 12H8.25Zm20.25 6a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 1 0 0-3h-9Zm0 9a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 1 0 0-3h-9Zm-12.717-3.858a4.07 4.07 0 1 0 0-8.141 4.07 4.07 0 0 0 0 8.141Zm-4.209 2.034A2.574 2.574 0 0 0 9 27.75a5.01 5.01 0 0 0 3.795 4.86l.159.042c1.86.465 3.801.465 5.658 0l.162-.039a5.01 5.01 0 0 0 3.795-4.86 2.573 2.573 0 0 0-2.574-2.577h-8.421Z"
                  fill="#202020"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink aria-label="Link to page id" class="a nav__link" to="#contact" @click.native="scrollTo('#contact')">
            <div class="svg nav__svg contact-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h8v6a2 2 0 0 0 2 2h1c.5 0 1-.2 1.4-.58L27.8 36H40a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm0 4h32v24H26.16L20 38.16V32H8V8Zm16.38 3c-1.78 0-3.2.36-4.28 1.08-1.1.72-1.66 1.92-1.56 3.3h3.94c0-.56.2-.98.52-1.26.4-.28.84-.42 1.38-.42.62 0 1.16.16 1.52.52.36.34.54.78.54 1.38 0 .56-.16 1.06-.44 1.48-.34.44-.76.8-1.28 1.08-1.04.64-1.72 1.2-2.14 1.68C22.2 20.32 22 21 22 22h4c0-.56.1-1 .28-1.36.18-.34.52-.64 1.04-.94.92-.42 1.68-.98 2.26-1.7.58-.74.88-1.52.88-2.4 0-1.4-.54-2.52-1.62-3.36-1.08-.82-2.58-1.24-4.46-1.24ZM22 24v4h4v-4h-4Z"
                  fill="#202020"
                />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink aria-label="Link to page id" class="a nav__link" to="/playground" @click.native="scrollTo('')">
            <div class="svg nav__svg play-svg">
              <svg width="48" height="48" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"
                  fill="#202020"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>

        <div class="nav__panel__bottom">
          <!-- https://i18n.nuxtjs.org/lang-switcher -->
          <NuxtLink
            aria-label="Link to page id"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            @click.native="scrollTo('')"
            class="svg nav__svg language-svg js-language-switcher"
          >
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 16h40M24 46c12.15 0 22-9.85 22-22S36.15 2 24 2 2 11.85 2 24s9.85 22 22 22Zm0 0c6 0 8-10 8-22S30 2 24 2s-8 10-8 22 2 22 8 22ZM4 32h40H4Z"
                stroke="#202020"
                stroke-width="4"
              />
            </svg>
          </NuxtLink>

          <div class="svg nav__svg sun-svg js-theme-switcher hide">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 33a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0 3a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm0-36a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 1 1-3 0v-6A1.5 1.5 0 0 1 24 0Zm0 39a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 1 1-3 0v-6A1.5 1.5 0 0 1 24 39Zm24-15a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 1 1 0-3h6A1.5 1.5 0 0 1 48 24ZM9 24a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 1 1 0-3h6A1.5 1.5 0 0 1 9 24ZM40.971 7.029a1.5 1.5 0 0 1 0 2.121l-4.242 4.245a1.501 1.501 0 0 1-2.121-2.124l4.242-4.242a1.5 1.5 0 0 1 2.121 0ZM13.392 34.608a1.5 1.5 0 0 1 0 2.121L9.15 40.971a1.5 1.5 0 0 1-2.121-2.121l4.242-4.242a1.5 1.5 0 0 1 2.121 0Zm27.579 6.363a1.5 1.5 0 0 1-2.121 0l-4.242-4.242a1.5 1.5 0 0 1 2.121-2.121l4.242 4.242a1.5 1.5 0 0 1 0 2.121ZM13.392 13.395a1.5 1.5 0 0 1-2.121 0L7.029 9.15A1.5 1.5 0 1 1 9.15 7.029l4.242 4.242a1.5 1.5 0 0 1 0 2.124Z"
                fill="#202020"
              />
            </svg>
          </div>

          <div class="svg nav__svg moon-svg js-theme-switcher">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 3C13.5 3 4.5 10.5 4.5 22.5s9 21 21 21S45 34.5 45 27C28.5 37.5 10.5 19.5 21 3Z"
                stroke="#202020"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script scoped>
const scrollTimeout = 550
export default {
  mounted() {
    // Scroll to page's anchors https://forum.vuejs.org/t/how-to-handle-anchors-bookmarks-with-vue-router/14563/5
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), scrollTimeout)
    }

    /****************************** Navigation menu ******************************/
    const menu = document.querySelector('.nav__menu')
    const navLinks = document.querySelector('.nav__panel')
    const linkArr = document.querySelectorAll('.nav__link')
    const body = document.querySelector('body')

    function showMenu(e) {
      if (menu.classList.contains('show-nav__menu')) {
        menu.classList.remove('show-nav__menu')
        navLinks.classList.remove('show-nav__panel')
      } else {
        menu.classList.add('show-nav__menu')
        navLinks.classList.add('show-nav__panel')
      }
      let intViewportWidth = window.innerWidth
      if (intViewportWidth < 768) {
        body.classList.toggle('lock-scroll')
      }
      e.stopPropagation()
    }
    menu.addEventListener('click', showMenu, false)
    linkArr.forEach((item) => {
      item.addEventListener('click', showMenu, false)
    })

    // Theme switcher
    const themeSwtichButtons = document.querySelectorAll('.js-theme-switcher')
    const html = document.querySelector('html')

    themeSwtichButtons.forEach((item) => {
      item.addEventListener('click', themeSwitcher, false)
    })

    function themeSwitcher() {
      html.classList.toggle('light-mode')
      themeSwtichButtons.forEach((item) => {
        item.classList.toggle('hide')
      })
    }
  },
  methods: {
    scrollTo: function (hashtag) {
      setTimeout(() => {
        location.href = hashtag
      }, scrollTimeout)
    },
  },
  computed: {
    // i18n language switcher
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
