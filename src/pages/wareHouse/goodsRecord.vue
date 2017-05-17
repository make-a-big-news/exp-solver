<template>
  <div>
    <topMenu></topMenu>
    <mainPage :showWrapper=false>
      <template slot="breadcrumb">
        <li class="active">拼仓记录</li>
      </template>

      <template slot="main">
        <template v-for="item in items">
          <div class="panel panel-default">
            <div class="panel-body">
              <p v-if="item.rent_want===0">仓储性质: 出租</p>
              <p v-else="item.rent_want===1">仓储性质: 租用</p>
              <p>仓库编号: {{item.number_code}}</p>
              <p>开始时间：{{item.start_time}}</p>
              <p>仓库容量：{{item.amount}}</p>
              <p>匹配结果：

                <router-link class="btn btn-primary btn-lg"
                             :to="{path:'/goodsRecord/goodsDetail', query:{  number_code:item.number_code} }"
                             v-if='item.if_matched === 1'>
                  匹配成功(查看详细信息)

                </router-link>
                <a class="btn btn-primary btn-lg" v-else> 匹配中....</a>
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
      this.$api.storeService.listAll().then(rsp => {
        this.items = rsp.data;
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container {
  }
</style>

