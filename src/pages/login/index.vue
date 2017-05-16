<template>
  <div class="wrapper">
    <div class="login">
    <a class="signIn" @click="signIn">登录</a>
      <span>|</span>
      <a class="signUp" @click="signUp">注册</a>
    </div>
    <div class="logo">
    <h1 class="animated infinite rotateOut" v-if="show === 1">欢迎使用Exp-Solver物流智能共享平台</h1>
      <h1  v-else>欢迎使用Exp-Solver物流智能共享平台</h1>
    </div>
    <router-view></router-view>

  </div>

</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        show: 1
      }
    },
    methods: {
      signIn(){
        this.$router.push('/login/signIn');
      },
      signUp(){
        this.$router.push('/login/signUp');
      }
    },
    mounted(){
      const _this=this;
      setTimeout(function () {
        _this.show=0;
      },1000)
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 0 auto;
    background-image: url("~assets/img/login.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login{
    position: absolute;
    right: 0;
    margin:10px 30px 0 0;
    a{
      color: black;
      font-size: 1.4em;
    }
    span{
      font-size: 20px;
      margin: 0 6px;
    }
  }
  .logo{
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100%;
    h1{
      font-weight: 500;
      font-size: 45px;
    }

  }

</style>
