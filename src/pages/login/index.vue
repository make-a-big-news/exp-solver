<template>
  <div class="wrapper">
    <div class="login">
      <a class="signIn" @click="signIn">登录</a>
      <span>|</span>
      <a class="signUp" @click="signUp">注册</a>
    </div>
    <div class="logo">
      <h1 class="animated infinite rotateOut" v-if="show">欢迎使用“e米滴答”社区O2O物流平台</h1>
      <h1 v-else>欢迎使用“e米滴答”社区O2O物流平台</h1>
    </div>
    <!--遮罩-->
    <div class="s-bgc" v-show="showBgc" ></div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        show: true,
        showBgc: false
      }
    },
    methods: {
      signIn(){
        this.$router.push('/login/signIn');
        this.showBgc=true;
      },
      signUp(){
        this.$router.push('/login/signUp');
        this.showBgc=true;
      }
    },
    mounted(){
      const _this = this;
      setTimeout(() => {
        _this.show = false;
      }, 1000)
    }
  }
//  todo: 遮罩关闭bug
</script>

<style lang="scss" scoped>
  .s-bgc {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #262626;
    opacity: .5;
    z-index: 10;
  }

  .wrapper {
    margin: 0 auto;
    background: {
      image: url("~assets/img/login.jpg");
      repeat: no-repeat;
      size: cover;
    }
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .login {
    position: absolute;
    right: 0;
    margin: 10px 30px 0 0;
    a {
      cursor: pointer;
      color: black;
      font-size: 1.4em;
    }
    span {
      font-size: 20px;
      margin: 0 6px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    h1 {
      font-weight: 500;
      font-size: 45px;
    }

  }

</style>
