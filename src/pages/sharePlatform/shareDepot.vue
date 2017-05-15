<template>
  <div>
    <topMenu></topMenu>
    <mainPage>
      <template slot="breadcrumb">
        <li class="active">共享拼仓</li>
      </template>

      <template slot="main">
        <div class="container">
          <div>
            <h3>请选择：</h3>
            <div class="radio">
              <label>
                <input type="radio" name="sample1" value="0" v-model="input.rent_want">
                仓库出租
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="sample1" value="1" v-model="input.rent_want">
                仓库租用
              </label>
            </div>
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput2">仓库容量</label>
            <input class="form-control" id="focusedInput2" type="number" min="10" max="90" step="10"
                   v-model.trim="input.amount">
            <p class="help-block">请输入您的仓库预计存储的货物量(10~90)吨</p>
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput3" v-if="input.rent_want === '0'">出租日期</label>
            <label class="control-label" for="focusedInput3" v-else>租用日期</label>
            <input class="form-control" id="focusedInput3" type="date"
                   v-model.trim="input.date">
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput4" v-if="input.rent_want === '0'">出租具体时间</label>
            <label class="control-label" for="focusedInput4" v-else>租用具体时间</label>
            <input class="form-control" id="focusedInput4" type="time"
                   v-model.trim="input.time">
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput5" v-if="input.rent_want === '0'">仓储出租时间</label>
            <label class="control-label" for="focusedInput5" v-else>仓储租用时间</label>
            <input class="form-control" id="focusedInput5" type="text" v-model.trim="input.duration">
            <p class="help-block">请输入您预计租用的时间(h)</p>
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput6">价格区间</label>
            <input class="form-control" id="focusedInput6" type="number" v-model.trim="input.price">
            <p class="help-block">请输入您可以接受的价格区间</p>
          </div>
          <div class="wrap">
            <a class="btn btn-raised btn-primary" style="float: right;" @click="submit">提交</a>
          </div>
        </div>
      </template>
    </mainPage>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import topMenu from '@/components/topMenu';
  import { storeService } from '@/service';


  export default {
    name: 'searchDepot',
    components: {
      mainPage,
      topMenu
    },
    data() {
      return {
        input: {
          amount: '',
          date: '',
          time: '',
          duration: '',
          price: ' ',
          rent_want: '0',
        },
      }
    },
    computed: {
      params(){
        return {
          amount: this.input.amount,
          start_time: `${this.input.date} ${this.input.time}:00`,
          duration: Number(this.input.duration),
          rent_want: Number(this.input.rent_want),
        }
      }
    },
    methods: {
      submit(){
        storeService.match(this.params)
          .then((rsp) => {
            this.$showDialog({
              title: '成功',
              content: '您的信息已提交，是否跳转至运输管理页面？',
              close: '取消',
              onPositive: function () {
                _this.$router.push('/goodsRecord')
              }
            })
          }).catch((e) => {
          this.$showDialog({
            title: '出错了',
            content: e.response.status
          })
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
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
