<script setup lang="ts">
import { onMounted } from "vue";
import members from "../assets/data/valhalla.json";

onMounted(() => {
  const imageContainers = document.querySelectorAll(".pixel-circle-image");
  imageContainers.forEach((container) => {
    const canvas = container.querySelector("canvas");
    const avatar = container.querySelector("img");
    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (ctx && avatar) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = avatar.src; // 替换为你的图片路径
        image.onload = () => {
          // 调整图像尺寸以适应canvas，同时保持纵横比
          canvas.width = 80; // 设定宽度
          canvas.height = 80; // 设定高度
          const scale = Math.max(
            canvas.width / image.width,
            canvas.height / image.height,
          );
          const imgWidth = scale * image.width;
          const imgHeight = scale * image.height;
          console.log(canvas.width, image.width, canvas.height, image.height);
          // 清除之前的绘图
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
          applyPixelationEffect(ctx, imgWidth, imgHeight, 0, 0);
        };
      }
    }
  });
});

function applyPixelationEffect(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  offsetX: number,
  offsetY: number,
) {
  const pixelSize = 4;
  const sampleSize = 3;
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      const pixelData = ctx.getImageData(
        x + offsetX,
        y + offsetY,
        sampleSize,
        sampleSize,
      ).data;

      const average = [0, 0, 0, 0];
      for (let i = 0; i < sampleSize * sampleSize; i++) {
        for (let j = 0; j < 4; j++) {
          average[j] += pixelData[i * 4 + j];
        }
      }
      for (let j = 0; j < 4; j++) {
        average[j] /= sampleSize * sampleSize;
      }

      ctx.fillStyle = `rgba(${average[0]}, ${average[1]}, ${average[2]}, ${
        pixelData[3] / 255
      })`;
      ctx.fillRect(x + offsetX, y + offsetY, pixelSize, pixelSize);
    }
  }
}

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
                <img :src="member.avatar" hidden="hidden" alt="" />
                <canvas></canvas>
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
              <div class="p-2" :class="changeMargin(i)">
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
