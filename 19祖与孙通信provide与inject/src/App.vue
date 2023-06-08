<template>
  <div class="app">
    <h3>我是APP，{{name}}--{{price}}</h3>
    <AppChild></AppChild>
  </div>
</template>

<script>
import AppChild from "@/components/Child.vue";
import {provide, reactive, toRefs} from "vue";

export default {
    name: "App",
  components: {AppChild},
    setup() {
      let car = reactive({name:'奔驰', price:'40W'});
      provide('car',car)
      return {
        ...toRefs(car)
      };
    },
};
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>
