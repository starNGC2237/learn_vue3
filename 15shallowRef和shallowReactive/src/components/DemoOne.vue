<template>
  <h4>X:{{x.y}}</h4>
  <button @click="x={y:888}">点我替换X</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>

</template>

<script>
// TODO 两个优化 hooks
// TODO shallowReactive 如果有一个对象数据，结构比较深，但是变化时只是外部属性变化 ===>shallowReactive
// TODO shallowRef 如果有一个对象数据，后续功能不会修改该对象中的属性，而是直接生成新的对象替换 ===>shallowRef
// eslint-disable-next-line no-unused-vars
import {reactive, toRefs, shallowReactive, shallowRef, ref} from "vue";
export default {
  name: "DemoOne",
  setup() {
    let x= shallowRef({y:0});
    //数据
    // 只考虑第一行的响应式 let obj = shallowReactive({
    let obj = reactive({
      name:"张三",
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    console.log(x)
    return {
      x,
      ...toRefs(obj)
    };
  },
};
</script>

<style></style>
