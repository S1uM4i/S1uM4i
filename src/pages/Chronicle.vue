<script setup lang="ts">

import {ref} from "vue";

const achievements = ref([
  "你講得啱，但係 S1uM4i 係由華南高校組成嘅 CTF 聯隊，活躍係叫做「CTF」嘅遊戲裏面。係嗰度，畀S1uM4i揀中嘅人會獲賜「SM之力」。呢支戰隊已經贏咗好多獎，哋會飾演一個叫做「SMer」嘅神秘角色，解決難題，搵翻失散嘅 FLAG，同時發掘「SM」嘅真相。",
  "2023",
  "第六届“强网”拟态防御国际精英挑战赛 Mobile 第三名",
  "第六届“强网”拟态防御国际精英挑战赛 人工智能 第六名",
  "第六届“强网”拟态防御国际精英挑战赛 车联网 第十五名",
  "第三届“鹏城杯”联邦网络靶场协同攻防演练比赛 第二名",
  "第三届“香山杯”网络安全大赛 企业组 第一名",
  "第三届“香山杯”网络安全大赛 高校组 第二名",
  "首届“中华武数杯”全国网络攻防精英赛 第十名",
  "“巅峰极客”网络安全技能挑战赛 第七名",
  "XCTF 联赛 *CTF 第二名",
  "XCTF 联赛 SCTF 第四名",
  "D3CTF x AntCTF 第二名",
]);

</script>

<template>
  <PixelBorder class="h-full flex flex-col shrink overflow-hidden">
    <div class="overflow-scroll">
      <div class="text-3xl leading-normal p-10">
        <p
            v-for="(achievement, index) in achievements"
            :key="index"
        >
          {{ achievement }}
        </p>
      </div>
    </div>
  </PixelBorder>
</template>

<style scoped>
p {
  font-family: pixel, serif;
}
</style>
