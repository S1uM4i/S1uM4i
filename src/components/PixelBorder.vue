<template>
  <div class="pixel-border">
    <slot></slot>
    <div>
      <div class="top-left">
        <div class="inner-corner"></div>
        <div class="inner-corner1"></div>
        <div class="inner-corner2"></div>
      </div>
      <div class="top-right">
        <div class="inner-corner"></div>
        <div class="inner-corner1"></div>
        <div class="inner-corner2"></div>
      </div>
      <div class="bottom-left">
        <div class="inner-corner"></div>
        <div class="inner-corner1"></div>
        <div class="inner-corner2"></div>
      </div>
      <div class="bottom-right">
        <div class="inner-corner"></div>
        <div class="inner-corner1"></div>
        <div class="inner-corner2"></div>
      </div>
      <div class="pixel-border-top">
        <div class="inner-row"></div>
      </div>
      <div class="pixel-border-bottom">
        <div class="inner-row"></div>
      </div>
      <div class="pixel-border-left">
        <div class="inner-col"></div>
      </div>
      <div class="pixel-border-right">
        <div class="inner-col"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pixel-border {
  position: relative;
}

.inner-row {
  width: calc(100% - 50px);
  height: 5px;
  background-color: black;
  position: absolute;
}

.inner-col {
  width: 5px;
  height: calc(100% - 50px);
  background-color: black;
  position: absolute;
}

.pixel-border-top .inner-row {
  top: 0;
  right: 25px;
}

.pixel-border-bottom .inner-row {
  bottom: 0;
  right: 25px;
}

.pixel-border-left .inner-col {
  top: 25px;
  right: 0;
}

.pixel-border-right .inner-col {
  left: 0;
  top: 25px;
}

.inner-corner {
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
}

.inner-corner1 {
  width: 10px;
  height: 5px;
  background-color: black;
  position: absolute;
}

.inner-corner2 {
  width: 5px;
  height: 10px;
  background-color: black;
  position: absolute;
}

.top-left .inner-corner {
  top: 10px;
  left: 10px;
}

.top-left .inner-corner1 {
  top: 5px;
  left: 15px;
}

.top-left .inner-corner2 {
  top: 15px;
  left: 5px;
}

.top-right .inner-corner {
  top: 10px;
  right: 10px;
}

.top-right .inner-corner1 {
  top: 5px;
  right: 15px;
}

.top-right .inner-corner2 {
  top: 15px;
  right: 5px;
}

.bottom-left .inner-corner {
  bottom: 10px;
  left: 10px;
}

.bottom-left .inner-corner1 {
  bottom: 5px;
  left: 15px;
}

.bottom-left .inner-corner2 {
  bottom: 15px;
  left: 5px;
}

.bottom-right .inner-corner {
  bottom: 10px;
  right: 10px;
}

.bottom-right .inner-corner1 {
  bottom: 5px;
  right: 15px;
}

.bottom-right .inner-corner2 {
  bottom: 15px;
  right: 5px;
}
</style>
<script></script>
