<template>
  <div>
    <topMenu></topMenu>
    <mainPage :showWrapper=false>
      <template slot="breadcrumb">
        <li class="active">运输记录</li>
      </template>

      <template slot="main">
        <template v-for="item in items">
          <div class="panel panel-default">
            <div class="panel-body">
              <p v-if="item.rent_want===0">运输性质: 出租</p>
              <p v-else="item.rent_want===1">运输性质: 租用</p>
              <p>运输编号: {{item.number_code}}</p>
              <p>运输开始时间：{{item.start_time}}</p>
              <p>是否有车：
              <span v-if="item.if_vehicle===1">有</span>
                <span v-else>无</span>
              </p>
              <p>匹配结果：


                <router-link :to="{path:'/transportRecord/transportDetail',query:{ number_code:item.number_code}}"
                             class="btn btn-primary btn-lg" v-if='item.if_matched === 1'>匹配成功(查看详细信息)


                </router-link>
                <a class="btn btn-primary btn-lg" v-else>匹配中...</a>
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
  import topMenu from '@/components/topMenu';
  import { transportService } from '@/service';


  export default {
    name: 'transportRecord',
    components: {
      mainPage,
      topMenu
    },
    data() {
      return {
        number_code: '',
        items: []
      }
    },
    created(){
      // 从服务器拉取数据
      transportService.listAll().then(rsp => {
        this.items = rsp.data;
      })
    }
  }
  //TODO:GET 展示车辆信息/list_vechileinfos
</script>

<style lang="scss" scoped>

</style>

