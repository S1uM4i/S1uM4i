<template>
  <TvEffect />
  <div class="main">
    <PixelBorder style="height: calc(100vh - 10px); width: calc(100vw - 10px)">
      <div class="grid grid-cols-4 gap-4">
        <div class="row-span-3 col-span-1" style="height: calc(100vh - 10px)">
          <Sidebar />
        </div>
        <div class="row-span-3 col-span-3">
          <slot />
        </div>
      </div>
    </PixelBorder>
  </div>
</template>

<style>
@font-face {
  font-family: pixel;
  src: url("/fonts/fusion-pixel.woff2");
}

body {
  background-color: black;
}

.main {
  padding: 5px;
  overflow: hidden;
}
</style>

<script setup lang="ts">
</script>
