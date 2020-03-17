<!--
 * @Author: ydd
 * @Date: 2020-03-16 18:07:50
 * @LastEditTime: 2020-03-17 23:45:43
 * @FilePath: /temp/demo2/src/views/Home.vue
 -->
<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <img
      alt="Vue logo"
      src="../assets/1.jpg"
    >
    <img src="../assets/2.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Boom />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Boom from './Boom'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Boom
  },
  created() {
    function a() {}
    a()
  }
}
</script>
<style scoped></style>
