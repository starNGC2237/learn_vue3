<script setup>
import {ref} from "vue";

let isShow = ref(false)
</script>

<template>
<div>
  <button @click="isShow = true">点我弹窗</button>
  <teleport to="body">
    <div class="mask" v-if="isShow">
      <div class="dialog" >
        <h3>我是一个弹窗</h3>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <button @click="isShow = false">关闭弹窗</button>
      </div>
    </div>

  </teleport>
</div>
</template>

<style scoped>
.mask{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
}
.dialog{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 300px;
  height: 300px;
  background-color: green;
}
</style>
