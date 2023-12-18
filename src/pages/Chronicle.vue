<script setup lang="ts">
import { ref } from "vue";

const achievements = ref({
  "2023": [
    "第六届“强网”拟态防御国际精英挑战赛 <br/>" +
      "&emsp; Mobile <b>第三名</b> + 人工智能 <b>第六名</b> + 车联网 <b>第十五名</b>",
    "第三届“香山杯”网络安全大赛 <br/>" +
      "&emsp; 企业组 <b>第一名</b> + 高校组 <b>第二名</b>",
    "第三届“鹏城杯”联邦网络靶场协同攻防演练比赛 <b>第二名</b>",
    "首届“中华武数杯”全国网络攻防精英赛 <b>第十名</b>",
    "“巅峰极客”网络安全技能挑战赛 <b>第七名</b>",
    "XCTF 联赛 *CTF <b>第二名</b>",
    "XCTF 联赛 SCTF <b>第四名</b>",
    "D3CTF x AntCTF <b>第二名</b>",
  ],
});
</script>

<template>
  <PixelBorder class="h-full flex flex-col shrink overflow-hidden">
    <div class="overflow-scroll">
      <div class="text-3xl leading-normal p-6">
        <p>
          你講得啱，但係 <b>S1uM4i</b> 係由華南高校組成嘅 CTF
          聯隊，活躍係叫做<b>「CTF」</b>嘅遊戲裏面。係嗰度，畀
          <b>S1uM4i</b> 揀中嘅人會獲賜<b>「SM之力」</b>。
          呢支戰隊已經贏咗好多獎，哋會飾演一個叫做<b>「SMer」</b>嘅神秘角色，
          解決難題，搵翻失散嘅 <b>FLAG</b>，同時發掘<b>「SM」</b>嘅真相。
        </p>
        <hr class="my-6" />
        <div v-for="(achievement, year) in achievements" :key="year">
          <h2 class="text-5xl">{{ year }}</h2>
          <ul class="ml-4">
            <li v-for="item in achievement" :key="item" class="mt-2">
              <span v-html="item"></span>
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
