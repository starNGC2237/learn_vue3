<template>
  <h4>求和为:{{sum}}</h4>
  <button @click="sum++">加</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>

</template>

<script>
import {reactive, toRefs, ref, readonly, shallowReadonly} from "vue";
export default {
  name: "DemoOne",
  setup() {
    let sum= ref(0);
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

    sum = readonly(sum)
    obj = shallowReadonly(obj)
    return {
      sum,
      ...toRefs(obj)
    };
  },
};
</script>

<style></style>
