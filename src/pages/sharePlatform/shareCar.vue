<template>
  <div>
  <topMenu></topMenu>
  <mainPage>
    <template slot="breadcrumb">
      <li class="active">共享拼车</li>
    </template>

    <template slot="main">
      <div class="container">
        <div class="form-group label-floating">
          <h4>运输目的地</h4>
          <citySelect ></citySelect>
        </div>
        <div class="form-group label-floating">
          <label class="control-label" for="focusedInput3">货物量</label>
          <input class="form-control" id="focusedInput3" type="number" min="10" max="90" step="10" v-model.trim="input.quantity">
        </div>
        <div class="form-group label-floating">
          <label class="control-label" for="focusedInput4">开始运输日期</label>
          <input class="form-control" id="focusedInput4" type="date"
                 v-model.trim="input.date">
        </div>
        <div class="form-group label-floating">
          <label class="control-label" for="focusedInput5">开始运输具体时间</label>
          <input class="form-control" id="focusedInput5" type="time"
                 v-model.trim="input.time">
        </div>
        <div class="form-group label-floating">
          <label class="control-label" for="focusedInput6">运输需要时间</label>
          <input class="form-control" id="focusedInput6" type="text" v-model.trim="input.duration">
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model.trim="input.if_vehicle"> &nbsp;是否有车
                    </label>
          <a class="btn btn-raised btn-primary" style="float: right;" @click="submit">提交</a>
        </div>
      </div>
    </template>
  </mainPage>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import citySelect from '@/components/common/citySelect';
  import topMenu from '@/components/topMenu';

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
          duration: '',
          if_vehicle: ''
        },
      }
    },
    computed: {
      params(){
        return {
          start_time: `${this.input.date} ${this.input.time}:00`,
          duration: Number(this.input.duration),
          quantity: Number(this.input.quantity),
          if_vehicle: Number(this.input.if_vehicle)
        }
      }
    },
    methods: {
      submit(){
        const _this=this;
        this.$api.transportService.match(this.params).then((rsp) => {
          this.$showDialog({
            title: '成功',
            content: '您的信息已提交，是否跳转至运输管理页面？',
            close: '取消',
            onPositive: function () {
              _this.$router.push('/transportRecord');
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


  //TODO:post /match_vehicle
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
