<template>
  <div class="main-wrapper">
    <top-menu></top-menu>
    <div class="carousel-container">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="item active">
            <img src="~assets/img/global1.jpg">
          </div>
          <div class="item">
            <img src="~assets/img/global2.jpg">
          </div>
          <div class="item">
            <img src="~assets/img/global3.jpg"><!-- TODO:这张图需要压缩-->
          </div>
        </div>
      </div>
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">
      </a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">
      </a>
      <section class="footer">
        <div class="foot-tips">
          <h2>{{footTips}}</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import topMenu from '@/components/topMenu';

  export default {
    name: 'carousel',
    components: {
      topMenu
    },
    data() {
      return {
        footTips: '欢迎使用Exp-solver智能物流平台'
      }
    },
    mounted(){
      $('.carousel').carousel();
    }
  }
</script>

<style lang="scss" scoped>
  .main-wrapper{
    height: 100%;
  }
  /*轮播*/
  .carousel-container {
    transition: none !important; /*去除组件加载过度*/
    height: 100%;
    /*overflow: hidden;*/
    .carousel,
    .carousel-inner,
    .item {
      /*width: 1500px;*/
      width: 100%;
      height: 100%;
    }
    .carousel-indicators {
      li {
        margin: 0 5px;
      }
      bottom: 60px;
    }
    .item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .carousel-control {
      &.right {
        background-image: linear-gradient(to right, rgba(0, 0, 0, .0001) 0, rgba(0, 0, 0, 0.21) 100%) !important;
      }
      &.left {
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.21) 0, rgba(0, 0, 0, .0001) 100%) !important;
      }
    }
  }

  .carousel-inner {
    overflow: hidden;
    width: 100%;
    max-width: 2000px;
    height: 100%;
    margin: 0 auto;
  }

  .footer {
    height: 60px;
    overflow: hidden;
    z-index: 101;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, .3);
    .foot-tips {
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      h2 {
        font-size: 18px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        margin: 0;
      }
    }
  }

</style>

