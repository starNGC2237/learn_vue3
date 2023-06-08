<template>
  <h4>求和为:{{sum}}</h4>
  <button @click="sum++">加</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2 v-show="obj.car">车：{{obj.car}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
  <button @click="addCar">加车</button>
  <button v-show="obj.car" @click="obj.car.name+='！'">换车名字</button>
  <button v-show="obj.car" @click="obj.car.price++">加价格</button>
  <button @click="showRaw">输出最原始的person</button>
</template>

<script>
import {markRaw, reactive, ref, toRaw, toRefs} from "vue";
// TODO toRaw
// 用于读取响应式对象对应的普通对象，对这个对象的所有操作，不会引起页面更新
// TODO markRaw
// 1.有些值不应该设置成为响应式的，例如复杂的第三方类库
// 2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
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

    function showRaw(){
      const o = toRaw(obj)
      const s = toRaw(sum)
      console.log(o)
      console.log(s);
    }

    function addCar(){
      obj.car= markRaw({name: '奔驰', price: 40})
    }

    return {
      obj,
      sum,
      ...toRefs(obj),
      showRaw,
      addCar
    };
  },
};
</script>

<style></style>
