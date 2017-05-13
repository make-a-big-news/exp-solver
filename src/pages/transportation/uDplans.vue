<template>
  <div>
    <topMenu></topMenu>
    <mainPage>
      <template slot="breadcrumb">
        <li>
          <router-link to="/upDown">往返综合业务</router-link>
        </li>
        <li class="active">推荐方案</li>

      </template>

      <template slot="main">
        <div class="container">
          <div class="wrap">
            <h3>发货业务</h3>
          <a href="javascript:void(0)" class="btn btn-raised btn-lg">查看详情</a>
          <a href="javascript:void(0)" class="btn btn-raised btn-lg">路线查看</a>
          </div>
          <div class="wrap">
            <h3>返程业务</h3>
            <a href="javascript:void(0)" class="btn btn-raised btn-lg">查看详情</a>
            <a href="javascript:void(0)" class="btn btn-raised btn-lg">路线查看</a>
          </div>
          <div class="change">
            <a href="javascript:void(0)" class="btn btn-raised btn-primary">确认订单</a>
            <a href="javascript:void(0)" class="btn btn-raised btn-primary">取消订单</a>
          </div>
        </div>
      </template>
    </mainPage>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import citySelect from '@/components/common/citySelect';
  import topMenu from '@/components/topMenu'

  export default {
    name: 'searchCar',
    components: {
      mainPage,
      citySelect,
      topMenu
    },
    data() {
      return {
        input: {
          quantity: '',
          date: '',
          time: '',
          duration: ''
        }
      }
    }
  }


  //TODO:post /match_vehicle
</script>

<style lang="scss" scoped>
  .wrap{
    text-align: center;
    h3{
      text-align: left;
      margin-bottom: 30px;
      }
    a:last-child{
      margin-left: 15%;
    }
  }
  .change{
    margin-top: 200px;
    text-align: center;
    a:first-child{
      margin-right: 15%;
    }
  }

  .is-empty {
    input::-webkit-datetime-edit-fields-wrapper {
      display: none;
    }
  }

  .is-focused {
    input::-webkit-datetime-edit-fields-wrapper {
      display: inline-block;
    }
  }

</style>
