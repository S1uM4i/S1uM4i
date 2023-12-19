<template>
  <TvEffect />
  <div class="main h-screen">
    <PixelBorder class="h-full">
      <div class="h-full flex gap-x-4">
        <div class="basis-1/4 min-w-fit">
          <Sidebar />
        </div>
        <div class="basis-3/4 p-3 pl-0">
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
  @apply p-1.5 overflow-hidden;
}
</style>

<script setup lang="ts"></script>
