<script setup lang="ts">

</script>

<template>
  <div class="h-56 grid grid-cols-1 gap-4 content-center" style="height: 100vh">
    <div class="grid justify-items-center">
      <img class="h-[200px]" src="assets/images/avatar.jpg"  alt=""/>

      <b style="font-size:60px;">
        S1uM4i
      </b>

      <b style="font-size:20px;">
        三点几嘞，饮茶先
      </b>

      <div style="margin-bottom: 80px"></div>

      <PixelBorder class="menu">
        <div class="p-6 max-w-sm mx-auto rounded-xl flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-14 w-14" src="assets/images/search.webp"  alt=""/>
          </div>
          <div>
            <div class="text-xl font-medium text-black" style="font-size:40px;"><b>编年史</b></div>
            <b class="text-slate-900">/Chronicle</b>
          </div>
        </div>
      </PixelBorder>

      <div style="margin-bottom: 10px"></div>

      <PixelBorder class="menu">
        <div class="p-6 max-w-sm mx-auto rounded-xl flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-16 w-16" src="assets/images/award.webp"  alt=""/>
          </div>
          <div>
            <div class="text-xl font-medium text-black" style="font-size:40px;"><b>英灵殿</b></div>
            <b class="text-slate-900">/Valhalla</b>
          </div>
        </div>
      </PixelBorder>

      <div style="margin-bottom: 10px"></div>

      <PixelBorder class="menu">
        <div class="p-6 max-w-sm mx-auto rounded-xl flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-14 w-14" src="assets/images/star.webp"  alt=""/>
          </div>
          <div>
            <div class="text-xl font-medium text-black" style="font-size:40px;"><b>幻想乡</b></div>
            <b class="text-slate-900">/Arcadia</b>
          </div>
        </div>
      </PixelBorder>

    </div>
  </div>
</template>

<style scoped>

.menu {
  width: 280px;
  height: 100px;
}

b {
  font-family: pixel;
}
</style>