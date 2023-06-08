<template>
  <div class="app">
    <h3>我是APP</h3>
  </div>
</template>

<script>
import {isRef,isReactive,isReadonly,isProxy, reactive, readonly, ref, toRefs} from "vue";

export default {
    name: "App",
    setup() {
      let car = reactive({name:'奔驰', price:'40W'});
      let sum =ref(0);
      let car2 = readonly(car);

      console.log(isRef(sum))
      console.log(isReactive(car))
      console.log(isReadonly(car2))

      console.log(isProxy(car2))

      return {
        sum,
        car2,
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
