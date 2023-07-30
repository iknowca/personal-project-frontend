<script>
import {defineComponent} from 'vue'
import MyInfoComp from "@/components/account/MyInfoComp.vue";
import {mapMutations} from "vuex";

export default defineComponent({
  name: "MyPageView",
  components: {MyInfoComp},
  methods: {
    ...mapMutations("BoardModule", ["SET_PAGE"])
  },
  mounted() {
    this.SET_PAGE(0)
  }
})
</script>

<template>
<v-container>
<my-info-comp></my-info-comp>
</v-container>
</template>

<style scoped>

</style>