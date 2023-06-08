<template>
  <div class="app">
    <h3>我是APP</h3>
    <AppChild></AppChild>
  </div>
</template>

<script>
import AppChild from "@/components/Child.vue";

export default {
    name: "App",
    components: {AppChild},
};
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>
