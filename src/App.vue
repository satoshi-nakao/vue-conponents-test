<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Local></Local>
    <p>下はグローバル登録の二つ目を表示させる</p>
    <hr>
    <Global2></Global2>
  </div>
</template>

<script>
import Local from './components/Local.vue'

export default {
  components: {
    Local
  }
}
</script>

