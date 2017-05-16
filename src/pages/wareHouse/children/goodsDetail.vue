<template>
  <div class="modal" :class="{show:show}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="goBack">×


          </button>
          <h4 class="modal-title">租用详细信息</h4>
        </div>
        <div class="modal-body">
          <p>仓库编号：{{item.number_code}}</p>
          <p>开始时间：{{item.start_time}}</p>
          <p>租用时间：{{item.duration}}</p>
          <p>仓库容量：{{item.amount}}</p>
          <p>匹配条目：<span v-for="matchedPair in item.matched_pairs">{{matchedPair + ' '}}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="goBack">关闭</button>
          <button type="button" class="btn btn-primary">
            <a @click="goBack">返回</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { storeService } from '@/service';

  export default {
    name: '',
    data() {
      return {
        show: true,
        item: {}
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    },
    created(){
      storeService.getMatched(this.$route.query).then(rsp=>{
        this.item=rsp.data;
      })
    }
  }

</script>

<style lang="scss" scoped>
  .modal-dialog {
    margin: 150px auto;
  }

</style>

