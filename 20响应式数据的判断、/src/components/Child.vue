<script>
import Son from "@/components/Son.vue";

export default {
  name:'AppChild',
  components:{
    Son
  }
}
</script>

<template>
<div class="child">
<h3>我是子</h3>
  <Son></Son>
</div>
</template>

<style scoped>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>
