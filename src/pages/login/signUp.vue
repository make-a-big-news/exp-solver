<template>
    <div class="well">
        <form class="form-horizontal">
            <fieldset>
                <legend class="platform">注册</legend>
                <div class="form-group">
                    <label for="UserName" class="col-md-2 control-label">用户名</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="UserName" placeholder="用户名" v-model.trim="userName">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputidCard" class="col-md-2 control-label">证件号码</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="inputidCard" placeholder="证件号码" v-model.trim="idNum">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label versionCho">选型</label>
                    <div class="col-md-10">
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" >
                                个人
                            </label>
                        </div>
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" >
                                企业
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputphoneNum" class="col-md-2 control-label">手机号码</label>
                    <div class="col-md-10">
                        <input type="number" class="form-control" id="inputphoneNum" placeholder="手机号码" v-model.trim="phoneNum">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputemail" class="col-md-2 control-label">邮箱设置</label>
                    <div class="col-md-10">
                        <input type="email" class="form-control" id="inputemail" placeholder="邮箱设置" v-model.trim="email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="col-md-2 control-label">密码</label>
                    <div class="col-md-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="密码" v-model.trim="password">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputaccount" class="col-md-2 control-label">银行账户</label>
                    <div class="col-md-10">
                        <input type="number" class="form-control" id="inputaccount" placeholder="银行账户" v-model.trim="account">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label versionCho">版本选择</label>
                    <div class="col-md-10">
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadio" id="optionsRadio1" value="option1" checked="" >
                                免费共享版
                            </label>
                        </div>
                        <div class="radio ">
                            <label>
                                <input type="radio" name="optionsRadio" id="optionsRadio2" value="option2">
                                专属定制版
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-group signIn">
                    <div>
                        <a class="btn btn-raised btn-primary" @click="signIn">注册</a>

                    </div>
                </div>

            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'signUp',
        data() {
            return {
                userName:'',
                idNum:'',
                phoneNum:'',
                email:'',
                password:'',
                account:''
            }
        },
        methods: {
            signIn(){
                this.$auth.login();
                this.$router.push("/main");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .well {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999999;
        @media (max-width: 620px) {
            width: 100%;
            height: 100%;
            background-color: inherit;
        }
    }

    .platform {
        width: 440px;
        @media (max-width: 620px) {
            color: #fff;
            font-weight: 500;
        }
    }

    .form-group {
        margin-top: 10px;
    }

    /*.col-md-2 .control-label .versionCho {*/
    /*transition: all .4s;*/
    /*}*/
    .col-md-10 {
        float: right;
        width: 83%;
    }

    .col-md-2 {
        @media (max-width: 620px) {
            padding: 0 0 0 14px;
        }

        /*padding-right: 0;*/
    }

    .radio {
        display: inline;
    }

    .versionCho {
        margin: 0 !important;
    }

    .signIn {
        text-align: center;
    }

    @media (min-width: 768px) {
        .form-horizontal .control-label {
            padding-top: 0px;
        }
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
        .form-group.is-focused .radio label:hover {
            color: rgba(255, 255, 255, .84);
        }
        .form-group .radio label, .form-group label {
            color: rgba(255, 255, 255, .84);
        }
    }

    /*.form-group.is-focused .radio label{*/
    /*color: rgba(255, 255, 255, .84);*/
    /*!*}*!*/


</style>
