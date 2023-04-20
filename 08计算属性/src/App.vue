<template>
    <DemoOne>
    </DemoOne>
    
</template>

<script>
import DemoOne from "./components/DemoOne.vue";

export default {
    name: "App",
    components:{DemoOne},
    setup(){
        function showHelloMsg(v){
            alert(`触发hello。收到${v}`)
        }
        return {
            showHelloMsg
        }
    }
};
</script>

<style></style>
