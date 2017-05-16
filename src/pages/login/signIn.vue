<template>
  <div class="well">
    <form class="form-horizontal">
      <fieldset>
        <legend class="platform">EXP-SOLVER 登录

          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="goBack">×

          </button>
        </legend>
        <div class="form-group">
          <label for="UserName" class="col-md-2 control-label">用户名</label>
          <div class="col-md-10 ">
            <input type="text" class="form-control" id="UserName" placeholder="用户名" v-model.trim="username">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-md-2 control-label">密码</label>

          <div class="col-md-10">
            <input type="password" class="form-control" id="inputPassword" placeholder="密码" v-model.trim="password">
          </div>
        </div>
        <div class="form-group">
          <div class="btn1">
            <a class="btn btn-raised btn-primary" @click="signIn">登录</a>
            <a class="btn btn-raised btn-primary signStyle" @click="signUp">注册</a>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="codeScan">
      <span class="a">产品介绍</span>
      <span class="b">使用说明</span>
      <span class="c">掌上互联</span>
      <span class="d">韧曦金服</span>
      <!--<img src="~assets/img/introduction.png" style="width: 30px">-->
    </div>
  </div>
</template>

<script>
  import { authService } from '@/service';
  export default {
    name: 'signIn',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signIn(){
        authService.login({
          username: this.username,
          password: this.password
        }).then((rsp) => {
          this.$auth.login();
          this.$router.push("/homePage");
        }).catch((e) => {
          alert("账号密码错误，请重新输入");
        })
      },
      signUp(){
        this.$router.push("/login/signUp");
      },
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  //TODO: 屏幕宽度较小的时候不能滚动
  .col-md-10 {
    float: right;
    width: 83%;
  }

  .col-md-2 {
    padding-right: 0;
  }

  .btn1 {
    text-align: center;
  }

  .well {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    @media (max-width: 620px) {
      width: 100%;
      height: 100%;
      background-color: inherit;
    }

    min-width: 320px; //TODO :当宽度小于320时，无法移动
  }

  .platform {
    width: 440px;
    @media (max-width: 620px) {
      color: #fff;
      font-weight: 500;
      margin-bottom: 70px;
    }

  }

  .codeScan {
    text-align: center;
    @media (max-width: 620px) {
      margin-top: 130px;
    }
    span {
      display: inline-block;
      width: 80px;
      padding-top: 64px;
    }
    .a {
      background: url("~assets/img/introduction.png") no-repeat 18px 0px;
      background-size: 60%;
    }
    .b {
      background: url("~assets/img/instruction.png") no-repeat 18px 0px;
      background-size: 60%;
    }
    .c {
      background: url("~assets/img/interconnection.png") no-repeat 18px 0px;
      background-size: 60%;
    }
    .d {
      background: url("~assets/img/goldDress.png") no-repeat 18px 0px;
      background-size: 60%;
    }
  }
  .close{
    line-height: 34px;
  }

  .signStyle {
    margin-left: 60px;
  }

  @media (max-width: 620px) {
    .form-control, .form-group .form-control {
      color: #fff;
    }
    .form-control::-webkit-input-placeholder, .form-group .form-control::-webkit-input-placeholder {
      color: rgba(255, 255, 255, .84);
    }
    .form-control, .form-group .form-control {
      background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#d2d2d2));
    }
    .form-group label.control-label {
      color: rgba(255, 255, 255, .84);
    }
  }


</style>
