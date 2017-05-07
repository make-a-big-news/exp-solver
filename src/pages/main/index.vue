<template>
    <div class="main-wrapper">
        <!--导航栏-->
        <nav class="navbar-wrapper">
            <div class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header" @click="controlNavbar">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-responsive-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <router-link to="/main" class="navbar-brand"><span>EXP-SOLVER</span></router-link>
                    </div>
                    <div class="navbar-collapse collapse navbar-responsive-collapse" :class="{active:isCtrlBarActive}">
                        <ul class="nav navbar-nav">
                            <li>
                                <a class="btn" data-toggle="dropdown">仓储管理</a>
                                <ul class="dropdown-menu" @click="controlNavbar">
                                    <li>
                                        <router-link to="/main/goodsRecord">货物记录(免费)</router-link>
                                    </li>
                                    <li><a>压力预测(免费)</a></li>
                                    <li><a>推荐管理(免费)</a></li>
                                    <li>
                                        <router-link to="/main/constructionPlan">建设规划(付费)</router-link>
                                    </li>
                                    <li class="divider"></li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">运输管理</a>
                                <ul class="dropdown-menu" @click="controlNavbar">
                                    <li>
                                        <router-link to="/main/transportRecord">运输记录(免费)</router-link>
                                    </li>
                                    <li><a>车辆调配(免费)</a></li>
                                    <li>
                                        <router-link to="/main/recommendPath">推荐路径(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/cBusiness">往返综合业务(免费)</router-link>
                                    </li>
                                    <li><a>未来规划(付费)</a></li>
                                    <li class="divider"></li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">共享用呗</a>
                                <ul class="dropdown-menu" @click="controlNavbar">
                                    <li>
                                        <router-link to="/main/shareDepot">共享拼仓(免费)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/main/shareCar">共享拼车(免费)</router-link>
                                    </li>
                                    <li class="divider"></li>
                                </ul>
                            </li>
                            <li>
                                <a class="btn" data-toggle="dropdown">韧曦金服</a>
                                <ul class="dropdown-menu" @click="controlNavbar">
                                    <li><a>尊贵VIP</a></li>
                                    <li><a>信用花呗</a></li>
                                    <li><a>提现转账</a></li>
                                    <li><a>积分兑换</a></li>
                                    <li><a>我的钱包</a></li>
                                    <li><a>保险理财</a></li>
                                    <li><a>推荐工具</a></li>
                                    <li><a>附近服务</a></li>
                                    <li class="divider"></li>
                                </ul>
                            </li>

                            <li class="spinner"><span>|</span></li>

                            <li v-if="hasLogin">
                                <a class="btn" data-toggle="dropdown">账号设置</a>
                                <ul class="dropdown-menu" @click="controlNavbar">
                                    <li><a>我的订单</a></li>
                                    <li><a>账户管理</a></li>
                                    <li><a>用户认证</a></li>
                                    <li class="divider"></li>
                                    <li><a @click="logout">退出登录</a></li>
                                </ul>
                            </li>
                            <li v-else>
                                <router-link to="/login" class="btn" data-toggle="dropdown">登录</router-link>
                            </li>
                        </ul>
                        <div class="slider shor slider-success"></div>
                    </div>
                </div>
            </div>
        </nav>

        <transition name="fadein">
            <router-view></router-view>
        </transition>
    </div>

</template>


<script>
    import { LOG_IN } from '@/store/mutation-types';

    export default {
        name: 'main',
        components: {},
        data() {
            return {
                isCtrlBarActive: false
            }
        },
        computed: {
            hasLogin(){
                return this.$store.state.hasLogin;
            }
        },
        methods: {
            logout(){
                this.$auth.logout();
            },
            controlNavbar(){
                this.isCtrlBarActive = !this.isCtrlBarActive;
            }
        },
        mounted(){
            if (this.$auth.checkIfLoggedIn()) {
                this.$store.commit(LOG_IN)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-wrapper {
        height: 100%;
    }

    .navbar-wrapper {
        width: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        z-index: 9999;
        .navbar {
            max-width: 1200px;
            margin: 0 auto;
            color: #333;
            background-color: #fff !important;
            &-brand {
                font-size: 1.6em;
                font-weight: 500;
                line-height: 50px;
                height: 100%;
                /*@media (max-width: 757px) {*/
                /*line-height: 30px;*/
                /*}*/

            }
            &-collapse {
                @media (max-width: 757px) {
                    box-shadow: #767474 0px 4px 5px;
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
                .navbar-nav {
                    .navbar-login {
                        &:first-child {
                            margin-left: 20px;
                        }
                        font-size: 14px;
                        margin: 19px 5px;
                        padding: 1px 15px;
                        &:hover {
                            color: #fff;
                        }
                    }
                    @media (min-width: 768px) {
                        float: right;
                        > li > a {
                            padding: 0 20px 0 20px;
                            font-size: 16px;
                            line-height: 80px;
                        }
                    }
                }
            }
        }
        .btn {
            margin: 0;
            font-weight: 100;
        }
        .spinner {
            /*padding-left: 40px;*/
            padding: 28px 10px 0 10px;
            font-weight: 800;
            @media (max-width: 768px) {
                display: none;
            }
        }

        .dropdown-menu {
            a {
                text-indent: 5px;
                text-align: center;
                &:hover {
                    color: #009688 !important;
                }
            }
            i {
                margin-top: -3px;
            }
        }
    }

    .show {
        display: none;
    }

    .fadein-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
    }

    .fadein-enter-active {
        transition: all .6s ease-in-out;
    }

    @media (max-width: 757px) {
        .active {
            display: none;
            /*visibility: hidden;*/
            /*opacity: 0;*/
        }
        /*.active {*/
        /*animation-name: fadeOut !important;*/
        /*}*/

        /*@keyframes fadeOut {*/
        /*from {*/
        /*opacity: 1 !important;*/
        /*}*/

        /*to {*/
        /*opacity: 0 !important;*/
        /*transform: translate3d(0, 100%, 0) !important;*/
        /*}*/
        /*}*/
    }

</style>
