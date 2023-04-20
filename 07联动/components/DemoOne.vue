<template>
    <h1>一个人的信息</h1>
    <h2 v-show="person.name">姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="testHello">hello</button>
</template> 

<script>
import { reactive } from "vue";

export default {
    name: "DemoOne",
    beforeCreate(){
        console.log('----------beforeCreate--------')
    },
    props:['msg','school'],
    emits:['hello'],
    setup(props,context) {
        console.log('-----setup------',props,context)
        //数据
        let person = reactive({
            name: "张三",
            age: 18,
            
        });
        
        function testHello(){
            context.emit('hello','11111111111111')
        }
        return {
            person,
            testHello
        };
    },
};
</script>

<style></style>