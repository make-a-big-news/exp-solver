<template>
  <div>
    {{name}}


    <button @click="changeZhichao"></button>

  </div>
</template>

<script>
  export default {
    name: 'zhichao',
    props: {
      initName: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        name: this.initName// 组件内部的私有数据，用prop去初始化他
      }
    },
    methods: {
      changeZhichao(){
        this.name = '支超'
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>

