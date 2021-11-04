<style>
.object-3d {
  border-radius: 20px;
  margin: 10rem auto 0 auto;
  width: 30rem;
  height: 20rem;
}
</style>

<template>
  <main class="main">
    <div>
      <model-viewer
        class="object-3d"
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="./assets/x-drive.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
      >
      </model-viewer>
    </div>

    <!-- <a frameborder="0" data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/31dffca4308c1687a0f1f505b98a12"></a>
          <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script> -->
    <!-- <div>
          <a frameborder="0" data-theme="light" data-layers="1,2,3,4" data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/31dffca4308c1687a0f1f505b98a12"></a>
          <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </div> -->
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
  </main>
</template>

<script scoped>
export default {}
</script>
