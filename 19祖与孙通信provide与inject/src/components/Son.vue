<script>
import {inject} from "vue";

export default {
  name:'AppSon',
  setup(){
    let car = inject('car')
    return {
      car
    }
  }
}
</script>

<template>
  <div class="son">
    <h3>我是孙，{{car.name}}--{{car.price}}</h3>
  </div>
</template>

<style scoped>
.son{
  background-color: orange;
  padding: 10px;
}
</style>
