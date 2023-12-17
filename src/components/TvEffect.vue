<script>
export default {
  name: "TvEffect",
  mounted() {
    this.tvTurnOnEffect();
  },
  methods: {
    tvTurnOnEffect() {
      const tv = this.$refs.tvScreen;
      // 首先水平扩展，高度保持不变
      tv.animate(
        [
          {
            transform: "scaleX(0)",
            height: "20px",
            backgroundColor: "#fff",
            top: "50%",
          }, // 初始高度设为20px
          {
            transform: "scaleX(1)",
            height: "20px",
            backgroundColor: "#fff",
            top: "50%",
          },
        ],
        {
          duration: 200, // 水平扩展持续时间
          fill: "forwards",
        },
      ).onfinish = () => {
        // 水平扩展完成后垂直扩展
        tv.animate(
          [
            {
              transform: "scaleY(0)",
              height: "100%",
              backgroundColor: "#fff",
              top: "0%",
            },
            {
              transform: "scaleY(1)",
              height: "100%",
              backgroundColor: "#fff",
              top: "0%",
            },
          ],
          {
            duration: 300, // 垂直扩展持续时间
            fill: "forwards",
          },
        ).onfinish = () => {
          document.body.style.backgroundColor = "white";
        };
      };
    },
  },
};
</script>

<template>
  <div id="tv" ref="tvScreen"></div>
</template>

<style scoped>
#tv {
  position: fixed;
  width: 100%;
  height: 100%;
  transform-origin: center;
}
</style>
