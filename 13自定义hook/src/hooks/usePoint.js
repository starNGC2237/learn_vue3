import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    // 数据
    let point = reactive({
        x: 0,
        y: 0
    });

    // 方法
    function getXY(e) {
        console.log(e.pageX, e.pageY)
        point.x = e.pageX
        point.y = e.pageY
    }

    // 钩子
    onMounted(() => {
        window.addEventListener("click", getXY)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', getXY)
    })


    return point
}