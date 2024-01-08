<script setup lang="ts">
import achievements from "../assets/data/achievements.json";

const intro =
  "你講得啱，但係 S1uM4i 係由華南高校組成嘅 CTF 聯隊，活躍喺叫做「CTF」嘅遊戲入面。" +
  "喺嗰度，畀 S1uM4i 揀中嘅人會獲賜「SM之力」。 " +
  "呢支戰隊已經贏咗好多獎。我哋會飾演一個叫做「SMer」嘅神秘角色，" +
  "解決難題，搵翻失散嘅 FLAG，同時發掘「SM」嘅真相。";

const pattern = new RegExp(/第[一二三四五六七八九十]*名|S1uM4i|「.*?」/, "g");

const boldify = (str: string) => {
  const matches = str.matchAll(pattern);
  let result = "";
  let last = 0;
  for (const match of matches) {
    if (!match.index) continue;
    result += str.slice(last, match.index);
    result += `<b>${match[0]}</b>`;
    last = match.index + match[0].length;
  }
  result += str.slice(last);
  return result;
};
</script>

<template>
  <PixelBorder class="h-full">
    <div class="h-full p-6 overflow-scroll text-3xl leading-normal">
      <p v-html="boldify(intro)"></p>
      <hr class="my-6" />
      <div v-for="(achievement, year) in achievements" :key="year">
        <h2 class="text-5xl">{{ year }}</h2>
        <ul class="ml-4">
          <li v-for="item in achievement" :key="item" class="mt-2">
            <span v-html="boldify(item)"></span>
          </li>
        </ul>
      </div>
    </div>
  </PixelBorder>
</template>

<style scoped>
hr {
  border: 0;
  height: 5px;
  background-color: black;
}

li::before {
  content: "@";
  color: black;
  display: inline-block;
  width: 1em;
  margin-left: -0.2em;
}
</style>
