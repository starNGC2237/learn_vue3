<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h3>种类：{{ person.job.type }}</h3>
    <h3>钱：{{ person.job.salary }}</h3>
    <h3>爱好:{{ person.hobby }}</h3>
    <button @click="change">改</button>
</template>

<script>
import { ref, reactive } from "vue";

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
            },
            hobby: ["抽烟", "喝酒", "烫头"],
        });
        function change() {
            person.name = "里";
            person.age = 19;
            person.job.type = "UI";
            person.job.salary = "60k";
            person.hobby[0] = "学习";
        }

        /**
         * return ()=> h('h1','尚硅谷')
         */
        return {
            person,
            change,
        };
    },
};
</script>

<style></style>
