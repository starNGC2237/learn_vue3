<template>
    <h1>当前求和为：{{ sum }}</h1>
    <button @click="sum++">点我+1</button>
</template>

<script>
import {
    ref,
    onMounted,
    onBeforeMount,
    onBeforeUpdate,
    onUpdated,
    onUnmounted,
    onBeforeUnmount,
} from "vue";
export default {
    name: "DemoOne",
    setup() {
        let sum = ref(0);

        // 通过组合式api使用生命周期
        onBeforeMount(() => {
            console.log("onBeforeMount");
        });
        onMounted(() => {
            console.log("onMounted");
        });
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        });
        onUpdated(() => {
            console.log("onUpdated");
        });
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        });
        onUnmounted(() => {
            console.log("onUnmounted");
        });

        
        return {
            sum,
        };
    },
    /*
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    */
};
</script>

<style></style>
