<template>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前信息为：{{ msg }}</h2>
    <button @click="msg += '！'">修改信息</button>
    <hr>
    <h2>姓名：{{obj.name}}</h2>
    <h2>年龄：{{obj.age}}</h2>
    <h2>薪资：{{obj.job.j1.salary}}K</h2>
    <button @click="obj.name+='~'">修改姓名</button>
    <button @click="obj.age++">增加年龄</button>
    <button @click="obj.job.j1.salary++">增加薪资</button>

</template>

<script>
import { ref, watch,reactive } from "vue";
export default {
    name: "DemoOne",
    /*
    watch: {
        sum: {
            immediate: true,
            deep: true,
            handler(newV, oldV) {
                console.log("sum的值变化了", newV, oldV);
            },
        },
    },
    */
    setup() {
        //数据
        let sum = ref(0);
        let msg = ref("你好啊");
        let obj = reactive({
            name:"张三",
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        /*
        // 情况一：监视ref一个
        watch(
            sum,
            (newV, oldV) => {
                console.log("sum的值变化了", newV, oldV);
            },
            { immediate: true }
        );

        // 情况二：监视ref两个
        watch([sum, msg], (newV, oldV) => {
            console.log("sum或msg的值变化了", newV, oldV);
        });
        */

        // TODO 情况三 监视reactive,注意：此处无法正确获取oldValue
        // TODO 强制开启了深度监视，关闭不了
        /*
        watch(obj,(newV,oldV)=>{
            console.log('person',newV,oldV)
        })
        */
        
        
        // 情况四，监视reactive所定义的某一个属性
        /*
        watch(()=>obj.age,(newV,oldV)=>{
            console.log('person.age',newV,oldV)
        })
        */
        
        // 情况五 ，监视某些值
        watch([()=>obj.name, ()=>obj.age], (newV, oldV) => {
            console.log("name或age的值变化了", newV, oldV);
        });

        // 特殊情况
        watch(obj.job, (newV, oldV) => {
            console.log("job的值变化了", newV, oldV);
        },{deep:true});// 此处由于监视的是reactive所定义的对象中的某个属性，所以deep有效
        

        return {
            sum,
            msg,
            obj
        };
    },
};
</script>

<style></style>
