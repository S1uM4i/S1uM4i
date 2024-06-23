<script setup lang="ts">
import { ref } from "vue";

const menu_list = ref([
  { cn: "编年史", href: "/Chronicle", src: "/images/search.webp" },
  { cn: "英灵殿", href: "/Valhalla", src: "/images/award.webp" },
  { cn: "幻想乡", href: "/Arcadia", src: "/images/star.webp" },
]);
</script>

<template>
  <div class="h-full p-3 flex flex-col justify-center items-center">
    <img
      class="size-[200px] short:size-40 rounded-md"
      src="/images/logo.webp"
      alt="avatar"
    />

    <b class="text-6xl my-3 short:text-5xl short:my-2"> S1uM4i </b>

    <b class="text-xl short:text-base mb-auto"> 三点几嘞，饮茶先 </b>

    <div class="mt-2" v-for="menu in menu_list" :key="menu.href">
      <PixelBorder class="px-9">
        <NuxtLink :to="menu.href">
          <div class="py-5 short:py-3 mx-auto flex items-center space-x-3">
            <img
              class="size-14 short:size-12"
              :src="menu.src"
              :alt="menu.href"
            />
            <div class="flex flex-col justify-center font-bold">
              <div class="text-4xl short:text-3xl">{{ menu.cn }}</div>
              <div class="text-slate-900 leading-4 short:text-sm">
                {{ menu.href }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </PixelBorder>
    </div>
  </div>
</template>

<style scoped></style>
