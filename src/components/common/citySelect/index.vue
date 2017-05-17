<template>
  <div>
    <select v-model="province" :class="selectClass">
      <option value="">选择省</option>
      <option v-for="province in provinces" :value="province[valueType]">{{province.name}}</option>
    </select>
    <select v-model="city" :class="selectClass">
      <option value="">选择城市</option>
      <option v-for="city in cities" :value="city[valueType]">{{city.name}}</option>
    </select>
    <!--<select v-model="district" :class="selectClass">-->
    <!--<option value="">选择县/区</option>-->
    <!--<option v-for="district in districts" :value="district[valueType]">{{district.name}}</option>-->
    <!--</select>-->
    <slot></slot>
  </div>
</template>

<script>
  import citydata  from './citydata.json';

  export default {
    props: {
      initProvince: {
        default: '重庆市'
      },
      initCity: {
        default: '重庆'
      },
      selectClass: {
        type: String,
        default: ''
      },
      valueType: {
        type: String,
        default: 'name'
      }
    },
    data(){
      return {
        province: this.initProvince,
        city: this.initCity,
//        district: this.initDistrict,
        oldProvince: '',
        oldCity: '',
//        oldDistrict: '',
        provinces: [],
        cities: [],
//        districts: []
      }
    },
    mounted(){
      // 初始化数据
      this.provinces = citydata;
      this.oldProvince = this.province;
      this.oldCity = this.city;
      this.oldDistrict = this.district;
      let seletedProvince = this.provinces.filter(function (item) {
        return item[this.valueType] === this.province;
      }.bind(this));
      if (seletedProvince.length) {
        this.cities = seletedProvince[0]['children'];
      }
      let seletedCity = this.cities.filter(function (item) {
        return item[this.valueType] === this.city;
      }.bind(this));
      if (seletedCity.length) {
        this.districts = seletedCity[0]['children'];
      }
    },
    watch: {
      province(){
        let seletedItem = this.provinces.filter((item) => {
          return item[this.valueType] === this.province;
        });
        if (seletedItem.length) {
//         通过seletedItem 级联下一级
          this.cities = seletedItem[0]['children'];
//          显示默认city
          this.city = this.city === this.oldCity ? this.cities[0][this.valueType] : this.city;
        } else {
          this.city = '';
          this.cities = [];
        }
        this.oldCity = this.city;
//        自定义provinceChange事件，并触发
        this.$emit('update:province', seletedItem[0].name);
      },
      city(){
        let seletedItem = this.cities.filter(function (item) {
          return item[this.valueType] === this.city;
        }.bind(this));
//        if (seletedItem.length) {
//          this.districts = seletedItem[0]['children'];
//          this.district = this.district === this.oldDistrict ? this.districts[0][this.valueType] : this.district;
//        } else {
//          this.district = '';
//          this.districts = [];
//        }
//        this.oldDistrict = this.district;
        this.$emit('update:city', seletedItem[0].name);
      },
      district(){
        let seletedItem = this.districts.filter(function (item) {
          return item[this.valueType] === this.district;
        }.bind(this));
        this.$emit('districtChange', seletedItem[0]);
      }
    }
  }
</script>

<style lang="scss" scoped>

  select {
    margin-right: 10px;
  }

</style>

