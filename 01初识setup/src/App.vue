<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{age}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>


export default {
  name: 'App',
  setup(){
    //数据
    let name = '张三';
    let age = 18;
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好啊！`);
    }

    /**
     * return ()=> h('h1','尚硅谷')
     */
    return {
      name,
      age,
      sayHello
    }
    
  }

}
</script>

<style>
</style>
