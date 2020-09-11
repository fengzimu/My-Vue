<template>
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to Start</p>
    <form id="loginForm">
      <div class="form-group">
        <input class="form-control" v-model="username" placeholder="Username">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input class="form-control" v-model="password" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <!-- for循环 -->
          <!-- index给它的child去接收 -->
          <li v-for="(error, index) in errors" :key="index" :index="index">{{ error }}</li>
        </ul>
      </p>

      <p>
        <button type="button" @click="checkForm">提交</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Input',
  // props数组里的值，相当于data里定义的， 只是来源是来自parent。userLabel可能是个function
  // props: ['userLabel'],
  // 或者props:指定属性名和属性值的类型
  props: {
    // userLabel : Object,
    // deleteItem: Function
    // index: Number
  },
  data () {
    // 此时的this是这个组件的对象
    // 组件里必须写函数
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  // 数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件 --- 如果username,password等不定义在这里个Component,那么这个checkForm method就不要定义在这里了
  methods: {
    checkForm: function (e) {
      // 调用props的属性如下，this.userLabel
      // or const {userLabel, index, deleteItem} = this
      // 此时调用deleteItem不需要用this, deleteItem(index)
      if (this.username && this.password) {
        return true
      }
      this.errors = []

      if (!this.username) {
        this.errors.push('Name required.')
      }
      if (!this.password) {
        this.errors.push('Age required.')
      }

      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '../../../node_modules/admin-lte/dist/css/adminlte.min.css' */
</style>
