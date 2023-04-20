<template>
    <h1>一个人的信息</h1>
    <h2 v-show="person.name">姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
    <h3>种类：{{ person.job.type }}</h3>
    <h3>钱：{{ person.job.salary }}</h3>
    <h3>爱好:{{ person.hobby }}</h3>
    <h3>测试的数据：{{person.job.a.b.c}}</h3>
    <button @click="changeInfo">改人信息</button>
    <button @click="as">添加一个sex</button>
    <button @click="dn">删除名字</button>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "App",
    setup() {
        //数据
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                type: "前端",
                salary: "30k",
                a:{
                b:{
                    c:'11111111111111111111'
                }
            }
            },
            hobby: ["抽烟", "喝酒", "烫头"],
            
        });
        function changeInfo() {
            person.name = "里";
            person.age = 19;
            person.job.type = "UI";
            person.job.salary = "60k";
            person.hobby[0] = "学习";
        }
        function as(){
            person.sex = '男'
        }
        function dn(){
            delete person.name
        }
        /**
         * return ()=> h('h1','尚硅谷')
         */
        return {
            person,
            changeInfo,
            as,
            dn
        };
    },
};
</script>

<style></style>
