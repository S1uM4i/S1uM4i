<script setup lang="ts">
import {ref} from "vue";

const menu_list = ref([
  {cn: "编年史", en: "/Chronicle", src: "/images/search.webp"},
  {cn: "英灵殿", en: "/Valhalla", src: "/images/award.webp"},
  {cn: "幻想乡", en: "/Arcadia", src: "/images/star.webp"},
]);
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <img class="h-[200px]" src="/images/avatar.jpg" alt=""/>

    <b style="font-size: 60px"> S1uM4i </b>

    <b style="font-size: 20px"> 三点几嘞，饮茶先 </b>

    <div style="margin-bottom: 80px"></div>
    <div v-for="menu in menu_list">
      <PixelBorder class="menu">
        <NuxtLink :to="menu.en">
          <div
              class="p-6 max-w-sm mx-auto rounded-xl flex items-center space-x-4"
          >
            <div class="shrink-0">
              <img class="h-14 w-14" :src="menu.src" alt=""/>
            </div>
            <div>
              <div
                  class="text-xl font-medium text-black"
                  style="font-size: 40px"
              >
                <b>{{ menu.cn }}</b>
              </div>
              <b class="text-slate-900">{{ menu.en }}</b>
            </div>
          </div>
        </NuxtLink>
      </PixelBorder>

      <div style="margin-bottom: 10px"></div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  width: 280px;
  height: 100px;
}

b {
  font-family: pixel, serif;
}
</style>
