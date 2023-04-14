<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>种类：{{job.type}}</h3>
  <h3>钱：{{job.salary}}</h3>
  <button @click="change">改</button>
</template>

<script>
import {ref,reactive} from 'vue'

export default {
  name: 'App',
  setup(){
    //数据
    let name = ref('张三');
    let age = ref(18);
    let job = reactive({
      type:'前端',
      salary:'30k'
    })
    
    function change(){
      name.value = '里'
      age.value =19;
      job.type = 'UI';
      job.salary = '60k';
      
      console.log(name,age)
    }

    /**
     * return ()=> h('h1','尚硅谷')
     */
    return {
      name,
      age,
      job,
      change
    }
    
  }

}
</script>

<style>
</style>
