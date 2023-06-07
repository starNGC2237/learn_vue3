<template>
    <button @click="isShow = !isShow">切换</button>
    <DemoOne v-if="isShow"></DemoOne>
</template>

<script>
import DemoOne from "./components/DemoOne.vue";
import { ref } from "vue";
export default {
    name: "App",
    components: { DemoOne },
    setup() {
        let isShow = ref(true);
        return {
            isShow,
        };
    },
};
</script>

<style></style>
