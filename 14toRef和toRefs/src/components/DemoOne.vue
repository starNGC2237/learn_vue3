<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>

</template>

<script>
import {reactive,toRefs} from "vue";
export default {
  name: "DemoOne",
  setup() {
    //数据
    let obj = reactive({
      name:"张三",
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })


    return {
      ...toRefs(obj)
    };
  },
};
</script>

<style></style>
