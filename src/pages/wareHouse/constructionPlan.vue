<template>
  <div>
    <topMenu></topMenu>
    <mainPage>
      <template slot="breadcrumb">
        <li class="active">建设规划</li>
      </template>

      <template slot="main">
        <div class="wrapper">
          <h3>请输入相应的城市：</h3>
          <citySelect></citySelect>
          <div class="submit">
            <router-link class="btn btn-raised btn-primary" to="/constructionChart">提交</router-link>
          </div>
          <router-view></router-view>
        </div>
      </template>
    </mainPage>
  </div>
</template>

<script>
  import mainPage from '@/components/common/mainPage';
  import topMenu from '@/components/topMenu';
  import citySelect from '@/components/common/citySelect';


  export default {
    name: 'constructionPlan',
    components: {
      mainPage,
      topMenu,
      citySelect
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    h3 {
      margin-bottom: 30px;
    }
    .submit {
      margin-top: 30px;
      float: right;
    }
  }


</style>
