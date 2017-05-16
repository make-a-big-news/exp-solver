<template>
  <div class="modal" :class="{show:show}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="goBack">×


          </button>
          <h4 class="modal-title">运输详细信息</h4>
        </div>
        <div class="modal-body">
          <p>运输编号：{{item.number_code}}</p>
          <p>开始时间：{{item.start_time}}</p>
          <p>结束时间: {{item.end_time}}</p>
          <p>货物量：{{item.quantity}}</p>
          <p>是否有车：
              <span v-if="item.if_vehicle===1">有</span>
            <span v-else>无</span>
          </p>
          <p>匹配条目：<span v-for="matchPair in item.matchPairs">{{matchPair + ' '}}</span></p>
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
  import { transportService } from '@/service';

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
      transportService.getMatched(this.$route.query).then(rsp=>{
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

