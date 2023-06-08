<template>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前信息为：{{ msg }}</h2>
    <button @click="msg += '！'">修改信息</button>
    <hr />
    <h2>姓名：{{ obj.name }}</h2>
    <h2>年龄：{{ obj.age }}</h2>
    <h2>薪资：{{ obj.job.j1.salary }}K</h2>
    <button @click="obj.name += '~'">修改姓名</button>
    <button @click="obj.age++">增加年龄</button>
    <button @click="obj.job.j1.salary++">增加薪资</button>
</template>

<script>
import { ref,reactive, watchEffect } from "vue";
export default {
    name: "DemoOne",
    setup() {
        //数据
        let sum = ref(0);
        let msg = ref("你好啊");
        let obj = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        /*
        watch(
            sum,
            (n, o) => {
                console.log("sum变化", n, o);
            },
            { immediate: true }
        );
        */

        watchEffect(() => {
            const x1 = sum.value;
            const x2 = obj.job.j1.salary;
            console.log("watchEffect所指定的回调执行了",x1,x2);
        });

        return {
            sum,
            msg,
            obj,
        };
    },
};
</script>

<style></style>
