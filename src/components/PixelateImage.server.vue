<script setup lang="ts">
import { createCanvas, createImageData, loadImage } from "canvas";
import type { Canvas, CanvasRenderingContext2D } from "canvas";
import { decode as decodeWebP } from "@cwasm/webp";

async function fetchImage(src: string): Promise<Buffer> {
  if (src.startsWith("/") && process.server) {
    const { readFile } = await import("node:fs/promises");
    return await readFile("./src/public" + src);
  } else {
    const response = await $fetch.raw<Blob>(props.src);
    return Buffer.from(await response._data!.arrayBuffer());
  }
}

async function loadImageToCanvas(src: string): Promise<Canvas> {
  const buffer = await fetchImage(src);

  if (src.endsWith(".webp")) {
    const image = decodeWebP(buffer);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    const data = createImageData(image.data, image.width, image.height);
    ctx.putImageData(data, 0, 0);

    return canvas;
  } else {
    const image = await loadImage(buffer);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    return canvas;
  }
}

function pixelateToData(
  src: CanvasRenderingContext2D,
  size: number,
  sampleRatio: number,
): string {
  const canvas = createCanvas(size, size);
  const dst = canvas.getContext("2d");

  const srcSize = [src.canvas.width, src.canvas.height];
  const scale = srcSize.map((v) => Math.floor(v / size));
  const sampleSize = scale.map((v) => Math.max(1, Math.floor(v * sampleRatio)));
  const totalSamples = sampleSize[0] * sampleSize[1];
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const areaData = src.getImageData(
        x * scale[0],
        y * scale[1],
        sampleSize[0],
        sampleSize[1],
      ).data;

      const sum = [0, 0, 0, 0];
      for (let i = 0; i < totalSamples; i++) {
        for (let j = 0; j < 4; j++) {
          sum[j] += areaData[i * 4 + j];
        }
      }

      const avg = sum.map((v) => Math.round(v / totalSamples));
      dst.fillStyle = `rgba(${avg[0]}, ${avg[1]}, ${avg[2]}, ${avg[3] / 255})`;
      dst.fillRect(x, y, 1, 1);
    }
  }

  return canvas.toBuffer("image/png").toString("base64");
}

const props = defineProps<{
  src: string;
}>();

const nuxt = useNuxtApp();
const key = `${props.src}.pixelated`;

const { data } = useAsyncData(
  key,
  async () => {
    console.log(`Rendering: ${props.src}`);
    const canvas = await loadImageToCanvas(props.src);
    const base64 = pixelateToData(canvas.getContext("2d"), 20, 0.75);
    const url = `data:image/png;base64,${base64}`;
    nuxt.payload.data[key] = url;
    return url;
  },
  {
    getCachedData: () => nuxt.payload.data[key],
  },
);
</script>

<template>
  <img class="w-full image-pixelated" :src="data!" />
</template>

<style scoped>
.image-pixelated {
  image-rendering: pixelated;
}
</style>
