<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  const imageContainers = document.querySelectorAll(".pixel-circle-image");
  imageContainers.forEach(container => {
    const canvas = container.querySelector("canvas");
    const avatar = container.querySelector("img");
    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = avatar.src + "&tamp=" + (new Date()).valueOf(); // 替换为你的图片路径
        // console.log()
        image.onload = () => {
          // 调整图像尺寸以适应canvas，同时保持纵横比
          canvas.width = 80; // 设定宽度
          canvas.height = 80; // 设定高度
          const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
          const imgWidth = scale * image.width;
          const imgHeight = scale * image.height;

          const x = 0;
          const y = 0;
          // 清除之前的绘图
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
          applyPixelationEffect(ctx, imgWidth, imgHeight, x, y);
        };
      }
    }
  });
});

function applyPixelationEffect(ctx: CanvasRenderingContext2D, width: number, height: number, offsetX: number, offsetY: number) {
  const pixelSize = 4;
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      const pixelData = ctx.getImageData(x + offsetX, y + offsetY, 1, 1).data;
      ctx.fillStyle = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, ${pixelData[3] / 255})`;
      ctx.fillRect(x + offsetX, y + offsetY, pixelSize, pixelSize);
    }
  }
}

const isEven = (i: number) => {
  return i % 2 === 1;
}

const changeMargin = (i: number) => {
  if (isEven(i)) {
    return ["pl-[20px]", "pr-[40px]"]
  } else {
    return ["pl-[40px]", "pr-[20px]"]
  }
}
const changeRight = (i: number) => {
  if (isEven(i)) {
    return ["text-right", "ml-auto"]
  }
}

const handleClick = (url: string) => {
  window.open(url, "_blank", "noopener");
};

const members = [
  {
    "nickname": "GZTimeWalker",
    "avatar": "https://avatars.githubusercontent.com/u/28180262?v=4",
    "words": "后来的我们依然走着，只是不再并肩了，朝各自的人生追寻了。",
    "url": ""

  },
  {
    "nickname": "Frank",
    "avatar": "https://avatars.githubusercontent.com/u/56958034?v=4",
    "words": "每个平凡的自我，都曾幻想过，以你为名的小说，会是枯燥或是隽永。",
    "url": ""
  },
  {
    "nickname": "L1nyz-tel",
    "avatar": "/qlogo/g?b=qq&nk=1937126974&s=640",
    "words": "做世界的水手，奔赴所有港口～～",
    "url": "https://l1nyz-tel.cc/"
  },
  {
    "nickname": "xf1les",
    "avatar": "https://avatars.githubusercontent.com/u/55195054?v=4",
    "words": "如果我们不曾相遇，我会是在哪里。",
    "url": ""
  },
  {
    "nickname": "南溟NaN",
    "avatar": "/qlogo/g?b=qq&nk=804676727&s=640",
    "words": "也许会有一天，世界真的有终点，也要和你举起回忆酿的甜，和你再干一杯。",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "Are you going to Scarborough Fair, Parsley, sage, rosemary and thyme.",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "You are you are, my favourite medicine.",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "谁都只得那双手靠拥抱亦难任你拥有，要拥有必先懂失去怎接受。",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "时间是让人猝不及防的东西，晴时有风阴有时雨。",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "我曾经跨过山和大海也穿过人山人海。",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "Thought we'd build a dynasty forever couldn't break up.",
    "url": "https://southsea.st"
  },
  {
    "nickname": "南溟NaN",
    "avatar": "https://avatars.githubusercontent.com/u/34373144?v=4",
    "words": "三千里，偶然见过你。",
    "url": "https://southsea.st"
  },
]
</script>

<template>
  <PixelBorder class="h-full">
    <div class="h-full p-6 overflow-scroll text-3xl leading-normal flex flex-col">
      <div v-for="(member, i) in members">
        <div class="flex gap-2 p-2" :class="[{'flex-row-reverse': isEven(i)}]">
          <div class="items-center gap-3">
            <div class="h-[80px] w-[80px] relative">
              <div class="pixel-circle absolute bg-black"></div>
              <div class="pixel-circle-image cursor-pointer absolute" @click="handleClick(member.url)">
                <img :src="member.avatar" hidden="hidden" alt="">
                <canvas></canvas>
              </div>
            </div>
          </div>
          <div class="flex flex-col relative" :class="changeRight(i)">
            <strong class="text-slate-900 text-xl items-center font-medium"> {{ member.nickname }} </strong>
            <div class="pt-1 flex">
              <div class="p-2 absolute bg-black"
                   :class="['pixel-dialog', { 'right': isEven(i) }, changeMargin(i)]">
                <strong class="text-slate-900 text-2xl items-center font-medium"> {{ member.words }} </strong>
              </div>
              <div class="p-2" :class="changeMargin(i)">
                <strong class="text-slate-900 text-2xl items-center font-medium"> {{ member.words }} </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PixelBorder>
</template>
<style scoped>

.pixel-circle, .pixel-circle-image, .pixel-dialog {
  --width: 100%;
  --height: 100%;

  min-width: 80px;
  min-height: 80px;

  --bottom-border-5: calc(var(--height) - 5px);
  --bottom-border-10: calc(var(--height) - 10px);
  --bottom-border-15: calc(var(--height) - 15px);
  --bottom-border-25: calc(var(--height) - 25px);

  --left-border-5: calc(var(--width) - 5px);
  --left-border-10: calc(var(--width) - 10px);
  --left-border-15: calc(var(--width) - 15px);
  --left-border-25: calc(var(--width) - 25px);

}

/* 像素对话框 朝左 */
.pixel-dialog {
  --left: 30px;

  min-width: 70px;
  min-height: 65px;

  --left-dialog-border-0: calc(var(--left) + 0px);
  --left-dialog-border-5: calc(var(--left) + 5px);
  --left-dialog-border-15: calc(var(--left) + 15px);

  clip-path: polygon(
    /* 左上 尖号 上部 外侧 */ 0px 15px, var(--left-dialog-border-0) 15px, var(--left-dialog-border-0) 10px, var(--left-dialog-border-5) 10px,
        /* 左上 外侧 */ var(--left-dialog-border-5) 5px, var(--left-dialog-border-15) 5px,
        /* 上 外侧 */ var(--left-dialog-border-15) 0px, var(--bottom-border-25) 0px,
        /* 右上 外侧 */ var(--bottom-border-25) 5px, var(--bottom-border-15) 5px, var(--bottom-border-15) 10px, var(--bottom-border-10) 10px, var(--bottom-border-10) 15px, var(--bottom-border-5) 15px, var(--bottom-border-5) 25px,
        /* 右 外侧 */ var(--width) 25px, var(--width) var(--bottom-border-25),
        /* 右下 外侧 */ var(--bottom-border-5) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-5), var(--bottom-border-25) var(--bottom-border-5), var(--bottom-border-25) var(--height),
        /* 下 外侧 */ var(--left-dialog-border-15) var(--height),
        /* 左下 外侧 */ var(--left-dialog-border-15) var(--bottom-border-5), var(--left-dialog-border-5) var(--bottom-border-5), var(--left-dialog-border-5) var(--bottom-border-10), var(--left-dialog-border-0) var(--bottom-border-10), var(--left-dialog-border-0) var(--bottom-border-15), 25px var(--bottom-border-15),
        /* 左下 内侧 */ 25px var(--bottom-border-25), var(--left-dialog-border-0) var(--bottom-border-25), var(--left-dialog-border-0) var(--bottom-border-15), var(--left-dialog-border-5) var(--bottom-border-15), var(--left-dialog-border-5) var(--bottom-border-10), var(--left-dialog-border-15) var(--bottom-border-10),
        /* 下 内侧 */ var(--left-dialog-border-15) var(--bottom-border-5), var(--bottom-border-25) var(--bottom-border-5),
        /* 右下 内侧 */ var(--bottom-border-25) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-25),
        /* 右上 内侧 */ var(--bottom-border-5) 25px, var(--bottom-border-10) 25px, var(--bottom-border-10) 15px, var(--bottom-border-15) 15px, var(--bottom-border-15) 10px, var(--bottom-border-25) 10px, var(--bottom-border-25) 5px,
        /* 上部 内侧 */ var(--left-dialog-border-15) 5px, var(--left-dialog-border-15) 10px, var(--left-dialog-border-5) 10px, var(--left-dialog-border-5) 15px, var(--left-dialog-border-0) 15px, var(--left-dialog-border-0) 15px, var(--left-dialog-border-0) 20px,
        /* 左上 尖号 下部 内侧 */ 10px 20px, 10px 25px, 15px 25px, 15px 30px, 20px 30px, 20px 35px, 25px 35px, 25px var(--bottom-border-25), 20px var(--bottom-border-25),
        /* 左上 尖号 下部 外侧 */ 20px 35px, 15px 35px, 15px 30px, 10px 30px, 10px 25px, 5px 25px, 5px 20px, 0px 20px
  );
}

/* 像素对话框 朝右 */
.pixel-dialog.right {
  --right: 10px;

  --right-border-0: calc(var(--width) - var(--right) - 0px);
  --right-border-5: calc(var(--width) - var(--right) - 5px);
  --right-border-10: calc(var(--width) - var(--right) - 10px);
  --right-border-15: calc(var(--width) - var(--right) - 15px);
  --right-border-20: calc(var(--width) - var(--right) - 20px);
  --right-border-25: calc(var(--width) - var(--right) - 25px);
  --right-border-35: calc(var(--width) - var(--right) - 35px);

  --right-dialog-border-0: calc(var(--width) - 0px);
  --right-dialog-border-5: calc(var(--width) - 5px);
  --right-dialog-border-10: calc(var(--width) - 10px);
  --right-dialog-border-15: calc(var(--width) - 15px);
  --right-dialog-border-25: calc(var(--width) - 25px);
  --right-dialog-border-20: calc(var(--width) - 20px);

  clip-path: polygon(
    /* 左上 外侧 */ 0px 25px, 5px 25px, 5px 15px, 10px 15px, 10px 10px, 15px 10px, 15px 5px, 25px 5px,
        /* 上 外侧 */ 25px 0px, var(--right-border-35) 0px,
        /* 右上 尖号 上部 外侧 */ var(--right-border-35) 5px, var(--right-border-25) 5px, var(--right-border-25) 10px, var(--right-border-20) 10px, var(--right-border-20) 15px, var(--right-dialog-border-0) 15px,
        /* 右上 尖号 下部 外侧 */ var(--right-dialog-border-0) 20px, var(--right-dialog-border-5) 20px, var(--right-dialog-border-5) 25px, var(--right-dialog-border-10) 25px, var(--right-dialog-border-10) 30px, var(--right-dialog-border-15) 30px, var(--right-dialog-border-15) 35px, var(--right-dialog-border-20) 35px,
        /* 右下 外侧 */ var(--right-dialog-border-20) var(--bottom-border-25), var(--right-dialog-border-25) var(--bottom-border-25), var(--right-dialog-border-25) var(--bottom-border-15), var(--right-border-20) var(--bottom-border-15), var(--right-border-20) var(--bottom-border-10), var(--right-border-25) var(--bottom-border-10), var(--right-border-25) var(--bottom-border-5), var(--right-border-35) var(--bottom-border-5),
        /* 下 外侧 */ var(--right-border-35) var(--height), 25px var(--height),
        /* 左下 外侧 */ 25px var(--bottom-border-5), 15px var(--bottom-border-5), 15px var(--bottom-border-10), 10px var(--bottom-border-10), 10px var(--bottom-border-15), 5px var(--bottom-border-15), 5px var(--bottom-border-25),
        /* 左下 内侧 */ 10px var(--bottom-border-25), 10px var(--bottom-border-15), 15px var(--bottom-border-15), 15px var(--bottom-border-10), 25px var(--bottom-border-10),
        /* 下 内侧 */ 25px var(--bottom-border-5), var(--right-border-35) var(--bottom-border-5),
        /* 右下 内侧 */ var(--right-border-35) var(--bottom-border-10), var(--right-border-25) var(--bottom-border-10), var(--right-border-25) var(--bottom-border-15), var(--right-border-20) var(--bottom-border-15), var(--right-border-20) var(--bottom-border-25), var(--right-border-15) var(--bottom-border-25),
        /* 右上 尖号 下部 内侧 */ var(--right-border-15) 35px, var(--right-border-10) 35px, var(--right-border-10) 30px, var(--right-border-5) 30px, var(--right-border-5) 25px, var(--right-border-0) 25px, var(--right-border-0) 20px,
        /* 右上 尖号 上部 内侧 */ var(--right-border-20) 20px, var(--right-border-20) 15px, var(--right-border-25) 15px, var(--right-border-25) 10px, var(--right-border-35) 10px,
        /* 上 内侧 */ var(--right-border-35) 5px, 25px 5px,
        /* 左上 内侧 */ 25px 10px, 15px 10px, 15px 15px, 10px 15px, 10px 25px, 5px 25px, 5px var(--bottom-border-25), 0px var(--bottom-border-25));
}

/* 像素边框 */
.pixel-circle {
  clip-path: polygon(
    /* 左上 外侧 */ 0px 25px, 5px 25px, 5px 15px, 10px 15px, 10px 10px, 15px 10px, 15px 5px, 25px 5px, 25px 0px,
        /* 右上 外侧 */ var(--bottom-border-25) 0px, var(--bottom-border-25) 5px, var(--bottom-border-15) 5px, var(--bottom-border-15) 10px, var(--bottom-border-10) 10px, var(--bottom-border-10) 15px, var(--bottom-border-5) 15px, var(--bottom-border-5) 25px, var(--width) 25px,
        /* 右下 外侧 */ var(--width) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-5), var(--bottom-border-25) var(--bottom-border-5), var(--bottom-border-25) var(--height),
        /* 左下 外侧 */ 25px var(--height), 25px var(--bottom-border-5), 15px var(--bottom-border-5), 15px var(--bottom-border-10), 10px var(--bottom-border-10), 10px var(--bottom-border-15), 5px var(--bottom-border-15), 5px var(--bottom-border-25),
        /* 左下 内侧 */ 10px var(--bottom-border-25), 10px var(--bottom-border-15), 15px var(--bottom-border-15), 15px var(--bottom-border-10), 25px var(--bottom-border-10), 25px var(--bottom-border-5),
        /* 右下 内侧 */ var(--bottom-border-25) var(--bottom-border-5), var(--bottom-border-25) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-25),
        /* 右上 内侧 */ var(--bottom-border-5) 25px, var(--bottom-border-10) 25px, var(--bottom-border-10) 15px, var(--bottom-border-15) 15px, var(--bottom-border-15) 10px, var(--bottom-border-25) 10px, var(--bottom-border-25) 5px,
        /* 左上 内侧 */ 25px 5px, 25px 10px, 15px 10px, 15px 15px, 10px 15px, 10px 25px, 5px 25px, 5px var(--bottom-border-25), 0px var(--bottom-border-25));
}

/* 包裹内侧 */
.pixel-circle-image {
  clip-path: polygon(
    /* 左下 内侧 */ 10px var(--bottom-border-25), 10px var(--bottom-border-15), 15px var(--bottom-border-15), 15px var(--bottom-border-10), 25px var(--bottom-border-10), 25px var(--bottom-border-5),
        /* 右下 内侧 */ var(--bottom-border-25) var(--bottom-border-5), var(--bottom-border-25) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-10), var(--bottom-border-15) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-15), var(--bottom-border-10) var(--bottom-border-25), var(--bottom-border-5) var(--bottom-border-25),
        /* 右上 内侧 */ var(--bottom-border-5) 25px, var(--bottom-border-10) 25px, var(--bottom-border-10) 15px, var(--bottom-border-15) 15px, var(--bottom-border-15) 10px, var(--bottom-border-25) 10px, var(--bottom-border-25) 5px,
        /* 左上 内侧 */ 25px 5px, 25px 10px, 15px 10px, 15px 15px, 10px 15px, 10px 25px, 5px 25px, 5px var(--bottom-border-25), 0px var(--bottom-border-25));
}
</style>