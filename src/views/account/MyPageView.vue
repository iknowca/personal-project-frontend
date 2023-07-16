<script>
import {defineComponent} from 'vue'
import MyInfoComp from "@/components/account/MyInfoComp.vue";

export default defineComponent({
  name: "MyPageView",
  components: {MyInfoComp}
})
</script>

<template>
<v-container>
<my-info-comp></my-info-comp>
</v-container>
</template>

<style scoped>

</style>