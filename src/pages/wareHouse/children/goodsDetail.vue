<template>
  <div class="modal" :class="{show:show}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="changeStore">×


          </button>
          <h4 class="modal-title">租用详细信息</h4>
        </div>
        <div class="modal-body">
          <p>仓库编号：{{item.number_code}}</p>
          <p>开始时间：{{item.startTime}}</p>
          <p>租用时间：{{item.duration}}</p>
          <p>仓库容量：{{item.quantity}}</p>
          <p>匹配条目：<span v-for="matchPair in item.matchPairs">{{matchPair + ' '}}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="changeStore">关闭</button>
          <button type="button" class="btn btn-primary">
            <router-link to="/main/transportRecord">返回</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import unixToTime from '@/utils/formateDate';

  export default {
    name: '',
    data() {
      return {
        show: true,
        item: {
          number_code: 0,
          startTime: 14483000000,
          endTime: 13245345436,
          quantity: 40,
          isCar: '有',
          state: 0,
          matchPairs: ['zz', 'aa', 'qq']
        }
      }
    },
    methods: {
      changeStore() {
        this.show = !this.show;
      }
    },
    mounted(){
      // TODO:完善GET 获取匹配结果/get_matched_storerecords
      this.$API.list_vechileinfos({ number_code: this.$route.params.number_code }).then()
    }
  }

</script>

<style lang="scss" scoped>
  .modal-dialog {
    margin: 150px auto;
  }

</style>

