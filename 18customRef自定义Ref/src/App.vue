<template>
  <input type="text" v-model="keyWord"/>
  <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef} from "vue";

export default {
    name: "App",
    setup() {
        // let keyWord = ref('hello')
      function myRef(v,delay) {
        let timer;
        return customRef((track,trigger)=>{
          return {
          get:()=>{
            console.log('有人从myRef这个容器读取数据了，我把'+v+'给她了');

            // 通知Vue追踪数据的变化（提前和get商量一下，让他认为这个value是有用的）
            track()
            return v
            },
            set:(newV)=>{
              console.log('有人把myRef这个容器中的数据改为了'+newV)
              clearTimeout(timer)
              timer=setTimeout(()=>{
                v=newV;

                // 通知vue去重新解析模板
                trigger();
              },delay)

            }}
        });
      }

      // 使用程序员自定义的ref
      let keyWord = myRef('hello',500)
      return {
          keyWord
        };
    },
};
</script>

<style></style>
