<template>
  <div>
  <topMenu></topMenu>
    <mainPage>
        <template slot="breadcrumb">
            <li class="active">共享拼仓</li>
        </template>

        <template slot="main">
            <div class="container">
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput1">仓储编号</label>
                    <input class="form-control" id="focusedInput1" type="text" >
                    <p class="help-block">请输入您要租用的仓库编号</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput2">存储货物总量</label>
                    <input class="form-control" id="focusedInput2" type="number" min="10" max="90" step="10" v-model.lazy.trim="input.quantity">
                    <p class="help-block">请输入您预计存储的货物量(10~90)</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput3">起始时间</label>
                    <input class="form-control" id="focusedInput3" type="time">
                    <p class="help-block">请输入您预计租用的起始时间</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput4">仓储租用时间</label>
                    <input class="form-control" id="focusedInput4" type="text">
                    <p class="help-block">请输入您预计租用的时间</p>
                </div>
                <div class="form-group label-floating">
                    <label class="control-label" for="focusedInput5">价格区间</label>
                    <input class="form-control" id="focusedInput5" type="text">
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
    import topMenu from '@/components/topMenu'

    export default {
      name: 'searchDepot',
      components: {
        mainPage,
        topMenu
      },
      data() {
        return {
          input: {
            quantity: '',
            date: '',
            time: '',
            duration: '',
            if_vehicle: ''
          },
        }
      },
      computed: {
        params(){
          return {
            number_code: 1,
            quantity: this.input.quantity,
            start_time: `${this.input.date.replace(/-/g, '/')} ${this.input.time}:00`,
            duration: this.input.duration,
            if_vehicle: Number(this.input.if_vehicle)
          }
        }
      },
      methods: {
        submit(){
          const _this = this;
          this.$API.match_vehicle(this.params).then((rsp) => {
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


    //TODO: post /match_storehouse
</script>

<style lang="scss" scoped>

</style>
