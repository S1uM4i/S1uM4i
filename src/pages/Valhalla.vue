<script setup lang="ts">
import members from "../assets/data/valhalla.json";

const isEven = (i: number) => {
  return i % 2 === 1;
};
</script>

<template>
  <PixelBorder class="h-full">
    <div class="h-full p-6 overflow-scroll text-slate-900 flex flex-col">
      <div
        v-for="(member, i) in members"
        :key="member.nickname"
        class="flex gap-6 p-2"
        :class="[{ 'flex-row-reverse ml-auto': isEven(i) }]"
      >
        <div class="size-20 relative">
          <div class="pixel-circle absolute bg-black"></div>
          <a
            class="pixel-circle-image absolute"
            :href="member.url"
            target="_blank"
            rel="noopener"
          >
            <PixelateImage :src="member.avatar" />
          </a>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-xl" :class="[{ 'text-right': isEven(i) }]">
            {{ member.nickname }}
          </span>
          <div
            class="py-4 px-6 text-2xl whitespace-pre-wrap pixel-dialog"
            :class="[isEven(i) ? 'right pr-12' : 'pl-12']"
          >
            {{ member.words }}
          </div>
        </div>
      </div>
    </div>
  </PixelBorder>
</template>

<style scoped></style>
