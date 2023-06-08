<script>
import Dialog from "@/components/AppDialog.vue";
export default {
  name:'AppSon',
  components:{Dialog}

}
</script>

<template>
  <div class="son">
    <h3>我是孙</h3>
    <Dialog/>
  </div>
</template>

<style scoped>
.son{
  background-color: orange;
  padding: 10px;
}
</style>
