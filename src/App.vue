<template>
  <div id="app">
     <div class="login-box" style="background-color: #f6f6f6">
        <div class="login-logo">
          <div class="user-panel" style="padding:0px">
            <div class="image">
              <img src="./assets/logo.png" class="img-preview" alt="User Image" style="max-width: 150px">
            </div>
            <div class="user-panel" style="padding:0px;font-size: 25px">
            <small>Help CSR run better!</small>
          </div>
          </div>
      </div>
    <!-- 使用组件标签 -->
      <Login/>
     </div>
  </div>
</template>

<script>
// 1. 引入组件
import Login from './components/login/Login'

export default {
  // 2. 映射组件标签
  name: 'App',
  components: {
    Login
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import './extlib/iCheck/square/blue.css';
</style>
