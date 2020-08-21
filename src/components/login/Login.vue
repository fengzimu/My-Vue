<template>
<!-- 传递属性: (:)userLabel将会作为属性值传递给child -->
    <Input :userLabel = "userLabel"/>
</template>

<script>
import Input from './Input'
export default {
  name: 'Login',
  data () {
    // 组件里必须写函数
    return {
      msg: 'Welcome to Your Vue.js App',
      userLabel: {
        username: 'Username',
        password: 'password'
      }
    }
  },
  components: {
    Input
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
