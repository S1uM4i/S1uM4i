<script setup lang="ts">
import { ref } from "vue";

const achievements = {
  "2023": [
    "第六届“强网”拟态防御国际精英挑战赛 <br/>" +
      "&emsp; Mobile 第三名 + 人工智能 第六名 + 车联网 第十五名",
    "第三届“香山杯”网络安全大赛 <br/>" + "&emsp; 企业组 第一名 + 高校组 第二名",
    "第三届“鹏城杯”联邦网络靶场协同攻防演练比赛 第二名",
    "首届“中华武数杯”全国网络攻防精英赛 第十名",
    "“巅峰极客”网络安全技能挑战赛 第七名",
    "XCTF 联赛 *CTF 第二名",
    "XCTF 联赛 SCTF 第四名",
    "D3CTF × AntCTF 第二名",
  ],
};

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
  <PixelBorder class="h-full flex flex-col shrink overflow-hidden">
    <div class="overflow-scroll">
      <div class="text-3xl leading-normal p-6">
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
