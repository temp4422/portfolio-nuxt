<style>
*,
*::before,
*::after {
  /* set on all elements, so unset on particular */
  box-sizing: inherit;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  margin: 0;
}
html {
  overflow: hidden;
}
body {
  box-sizing: border-box;
  font-family: 'Segoe Print', sans-serif;
  background: var(--bg);
  color: var(--color);
  height: auto; /*DON NOT CHANGE HEIGHT AND MAX-HEIGHT! IT BRAKES SCROLL ANIMATION!*/
  max-height: 100%;
  scroll-behavior: smooth;
  transition: var(--transition-main-out); /* Apply theme */
}
.root {
  max-width: 768px;
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: 0 2rem;
}
.lock-scroll {
  overflow: hidden;
}
/****************************** MAIN ******************************/
.main {
  display: grid;
  place-items: center;
}
.section {
  padding: 0 0 8rem 0;
  display: grid;
  place-items: center;
}
/* .container {
  display: grid;
  place-items: center;
} */
.hr {
  margin: 10rem 0;
  width: 80%;
  height: 0.1rem;
  background: var(--color);
  border: 1px solid var(--color);
  border-radius: var(--border-radius);
  opacity: 0.5;
  z-index: 300;
}
.a {
  display: inline-block;
}
.h1 {
  height: auto;
  display: inline-block;
  text-align: center;
  margin: 2rem 0;
}
.h2 {
  height: auto;
  display: inline-block;
  text-align: center;
  margin: 2rem 0;
}
.p {
  height: auto;
  margin: 2rem 0;
  overflow: hidden;
}
.p-center {
  text-align: center;
  overflow: hidden;
}

.img {
  object-fit: contain;
  max-width: 100%;
  height: auto;
  overflow: hidden;
}
.svg {
  cursor: pointer;
  transition: var(--transition-main-out);
  filter: var(--shadow-normal);
}
.svg:hover {
  transition: var(--transition-main-in);
  filter: var(--shadow-hover);
}

/****************************** Animation ******************************/
/* Animate items on scroll */
.js-scroll {
  opacity: 0;
  transition: 1s;
}
.js-scroll.scrolled {
  opacity: 1;
}
/* Different scroll animation */
.scrolled.fade-in {
  animation: fade-in 1s ease-in-out both;
}
.scrolled.fade-in-delay-2 {
  animation: fade-in 2s ease-in-out both;
}
.scrolled.fade-in-delay-3 {
  animation: fade-in 3s ease-in-out both;
}
.scrolled.fade-in-delay-4 {
  animation: fade-in 4s ease-in-out both;
}
.scrolled.fade-in-bottom {
  animation: fade-in-bottom 1s ease-in-out both;
}
.scrolled.slide-left {
  animation: slide-in-left 1s ease-in-out both;
}
.scrolled.slide-right {
  animation: slide-in-right 1s ease-in-out both;
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Scrollbar Styling */
@media (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #303030;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
  }
}
</style>

<template>
  <div class="root">
    <Header />
    <Nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    /****************************** Animation ******************************/
    /* Animate items on scroll */
    const body = document.querySelector('body')
    const root = document.querySelector('.root')
    const scrollElements = document.querySelectorAll('.js-scroll')

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    }

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top
      return elementTop > (window.innerHeight || document.documentElement.clientHeight)
    }

    const displayScrollElement = (element) => {
      element.classList.add('scrolled')
    }

    const hideScrollElement = (element) => {
      element.classList.remove('scrolled')
    }

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el)
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    // root.addEventListener('scroll', () => {
    //   handleScrollAnimation()
    // })

    /*Increasing Performance with Throttle*/
    var throttleTimer

    const throttle = (callback, time) => {
      if (throttleTimer) return

      throttleTimer = true
      setTimeout(() => {
        callback()
        throttleTimer = false
      }, time)
    }

    body.addEventListener('scroll', () => {
      throttle(() => {
        handleScrollAnimation()
      }, 250)
    })

    /* Synchronous function to pause execution*/
    // function pause(milliseconds) {
    //   var dt = new Date()
    //   while (new Date() - dt <= milliseconds) {
    //     /* Do nothing */
    //   }
    // }
    // pause(2000)
  },
}
</script>
