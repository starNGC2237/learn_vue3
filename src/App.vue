<template>
  <div class="app">
    <h3>我是APP</h3>
    <Suspense>
      <template v-slot:default>
        <AppChild></AppChild>
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import AppChild from "@/components/Child.vue";
import {defineAsyncComponent} from 'vue'
const AppChild = defineAsyncComponent(()=>import('./components/Child.vue'))
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
