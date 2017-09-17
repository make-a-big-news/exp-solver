<template>
  <div>
    <topMenu></topMenu>
    <mainPage>
      <template slot="breadcrumb">
        <li class="active">往返综合业务</li>
      </template>

      <template slot="main">
        <div class="container">
          <div class=" label-floating">
            <h4>运输起点:</h4>
            <citySelect></citySelect>
          </div>
          <div class=" label-floating">
            <h4>运输终点:</h4>
            <citySelect></citySelect>
          </div>
          <div class=" label-floating">
            <h4>车辆型号:</h4>
            <select>
              <option value="">2吨车</option>
              <option value="">3吨车</option>
              <option value="">5吨车</option>
              <option value="">8吨车</option>
              <option value="">10吨车</option>
              <option value="">12吨车</option>
              <option value="">20吨车</option>
              <option value="">25吨车</option>
            </select>
          </div>

          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput3">货物量</label>
            <input class="form-control" id="focusedInput3" type="text" v-model.lazy.trim="input.quantity">
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput5">发货具体时间</label>
            <input class="form-control" id="focusedInput5" type="time"
                   v-model.lazy.trim="input.time1">
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput6">返程时间</label>
            <input class="form-control" id="focusedInput6" type="time"
                   v-model.lazy.trim="input.time2">
          </div>
          <div class="form-group label-floating">
            <label class="control-label" for="focusedInput7">等待时间</label>
            <input class="form-control" id="focusedInput7" type="text" v-model.lazy.trim="input.duration">
          </div>
          <router-link class="btn btn-raised btn-primary" style="float: right;" to="/uDplans">提交</router-link>
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
    name: 'backtogo',
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
          time1: '',
          time2: '',
          duration: ''
        }
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

  .container {
    h4 {
      margin-bottom: 20px;
    }
  }


</style>
