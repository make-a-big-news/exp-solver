<template>
  <div>
    <topMenu></topMenu>
    <mainPage :showWrapper=false>
      <template slot="breadcrumb">
        <li class="active">货物记录</li>
      </template>

      <template slot="main">
        <template v-for="item in items">
          <div class="panel panel-default">
            <div class="panel-body">
              <p>运输编号: {{item.number_code}}</p>
              <p>发货时间：{{item.start_time}}</p>
              <p>货物量：{{item.amount}}</p>
              <p>匹配结果：

                <!--<router-link :to="{path:'/goodsRecord/goodsDetail',query:{id:item.num}}"-->
                 <!--class="btn btn-primary btn-lg">成功(查看详细信息)-->

                 <!--</router-link>-->

                <router-link class="btn btn-primary btn-lg" to="/goodsRecord/goodsDetail" v-if='item.if_matched === 1'>
                  匹配成功(查看详细信息)
                </router-link>

                <router-link class="btn btn-primary btn-lg" to="/goodsRecord/goodsDetail" v-else> 匹配中....</router-link>
              </p>
            </div>
          </div>
        </template>
      </template>
    </mainPage>
    <router-view></router-view>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import unixToTime from '@/utils/formateDate';
  import topMenu from '@/components/topMenu';
  import { storeService } from '@/service';


  export default {
    name: 'goodsRecord',
    components: {
      mainPage,
      topMenu
    },
    data() {
      return {
        items: []
      }
    },
    created(){
      storeService.listAll().then(rsp => {
        this.items = rsp.data;
      })
    },
//    测试
    methods: {
      sin(){
        var arr = this.items;
        console.log(a.number_code);

      }
    }
  }
  //TODO: POST 显示所有发布信息/list_storerecords并且还要匹配？？
</script>

<style lang="scss" scoped>
  .container {
  }
</style>

