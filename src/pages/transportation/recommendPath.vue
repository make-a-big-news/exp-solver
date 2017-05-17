<template>
  <div>
    <topMenu></topMenu>
    <mainPage>
      <template slot="breadcrumb">
        <li class="active">推荐路径</li>
      </template>

      <template slot="main">
        <div class="container">
          <div class="form-group">
            <h4>输入起点</h4>
            <citySelect initProvince="重庆市"
                        initCity="重庆"
                        @update:province="val => startProvince = val"
                        @update:city="val => startCity = val"
            ></citySelect>
          </div>
          <div class="form-group">
            <h4>输入终点</h4>
            <citySelect initProvince="四川省"
                        initCity="成都市"
                        @update:province="val => endProvince = val"
                        @update:city="val => endCity = val"
            ></citySelect>
          </div>
          <div class="form-group form-group-plan">
            <h4>偏好</h4>
            <select v-model="preference">
              <option value="0">距离最短</option>
              <option value="1">时间最短</option>
              <option value="2">高速优先</option>
            </select>

            <transition name="dialog">
              <div class="modal" v-show="showRecommend">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                              @click="showRecommend = false">×
                      </button>
                      <h4 class="modal-title">重庆主城区 - 重庆铜梁区 - 遂宁市 - 大英县 - 成都</h4>
                    </div>
                    <div class="modal-body">
                      <div class="amap-container">
                        <el-amap :vid="map.vid"
                                 :zoom="map.zoom"
                        ></el-amap>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <a href="javascript:void(0)" class="btn btn-raised btn-primary plan-btn" @click="getRecommendPath">规划路线</a>
          </div>

        </div>
      </template>
    </mainPage>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import topMenu from '@/components/topMenu';
  import citySelect from '@/components/common/citySelect';

  export default {
    name: 'recommend-path',
    components: {
      mainPage,
      topMenu,
      citySelect
    },
    data(){
      return {
        showRecommend: false,
        map: {
          vid: 'amap-rp',
          zoom: 10,
          center: [40.757342, -74.244460],
        },
        startProvince: '重庆市',
        startCity: '重庆',
        endProvince: '四川省',
        endCity: '成都市',
        preference: "0"
      }
    },
    methods: {
      getRecommendPath(){
        this.showRecommend = true;
//        this.$api.transportService.getRecommendPath({
//          startCity: this.startCity,
//          endCity: this.endCity
//        })
      }
    },
    mounted() {

//      AMap.service('AMap.Geocoder', function () {//回调函数
//        //实例化Geocoder
//        geocoder = new AMap.Geocoder({
//          city: "010"//城市，默认：“全国”
//        });
//        //TODO: 使用geocoder 对象完成相关功能
//      })
    }
  }
  //TODO: GET 路径匹配/path_recommend
</script>

<style lang="scss" scoped>
  .modal {
    display: block;

  }

  .amap-container {
    height: 550px;
  }

  .form-group {
    margin: 2px 0 0 0;
    &-plan {
      position: relative;
    }
  }

  .plan-btn {
    position: absolute;
    right: 0;
    top: 0;
  }

  .img-wrap {
    width: 100%;
    text-align: center;
    margin-top: 36px;
    img {
      width: 100%;
    }
  }

  .modal-dialog {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .dialog-enter-active,
  .dialog-leave-active {
    transition: transform .4s, opacity .4s;
  }

  .dialog-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  .dialog-leave-active {
    opacity: 0;
    transform: scale(1.5);
  }
</style>
