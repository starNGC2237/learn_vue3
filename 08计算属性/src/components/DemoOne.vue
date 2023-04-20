<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    名：<input type="text" v-model="person.lastName">
    <span>全名：{{person.fullName}}</span>
    <input type="text" v-model="person.fullName">
</template> 

<script>
import { reactive ,computed} from "vue";

export default {
    name: "DemoOne",
    setup() {
        //数据
        let person = reactive({
            firstName: "张",
            lastName: '三',
            
        });
        // 计算属性简写 --  没有考虑计算属性被修改的情况
        /**
         *  person.fullName = computed(()=>{
            return person.firstName+'-'+person.lastName
        })
        */
       // 计算属性完整
        person.fullName = computed({
            get(){
                return person.firstName+'-'+person.lastName
            }
            ,
            set(value){
                const nameArr = value.split('-');
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })
        return {
            person
        };
    },
};
</script>

<style></style>