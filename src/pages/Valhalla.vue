<script setup lang="ts">
import members from "../assets/data/valhalla.json";

const isEven = (i: number) => {
  return i % 2 === 1;
};

const changeMargin = (i: number) => {
  if (isEven(i)) {
    return ["pl-[20px]", "pr-[40px]"];
  } else {
    return ["pl-[40px]", "pr-[20px]"];
  }
};

const changeRight = (i: number) => {
  if (isEven(i)) {
    return ["text-right", "ml-auto"];
  }
};

const handleClick = (url: string) => {
  window.open(url, "_blank", "noopener");
};
</script>

<template>
  <PixelBorder class="h-full">
    <div
      class="h-full p-6 overflow-y-scroll overflow-x-hidden text-3xl leading-normal flex flex-col"
    >
      <div v-for="(member, i) in members">
        <div
          class="flex gap-6 p-2"
          :class="[{ 'flex-row-reverse': isEven(i) }]"
        >
          <div class="items-center gap-3">
            <div class="h-[80px] w-[80px] relative">
              <div class="pixel-circle absolute bg-black"></div>
              <div
                class="pixel-circle-image cursor-pointer absolute"
                @click="handleClick(member.url)"
              >
                <PixelateImage :src="member.avatar" />
              </div>
            </div>
          </div>
          <div class="flex flex-col relative gap-2" :class="changeRight(i)">
            <strong class="text-slate-900 text-xl items-center font-medium">
              {{ member.nickname }}
            </strong>
            <div class="pt-1 flex">
              <div
                class="p-2 absolute bg-black"
                :class="['pixel-dialog', { right: isEven(i) }, changeMargin(i)]"
              >
                <strong
                  class="text-slate-900 text-2xl items-center font-medium whitespace-pre-wrap"
                >
                  {{ member.words }}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PixelBorder>
</template>
<style scoped></style>
