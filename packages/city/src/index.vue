<template>
  <div class="city-area">
    <div class="city-input" @click.stop="cityBool = true">
      <span class="city-val">{{cityVal}}</span>
      <!-- <input type="text" v-model="cityVal"/> -->
    </div>
    <div @click.stop="" class="city-lists" :class="{'ani-demo': cityBool}">
      <div class="city-list" v-for="(item, i) in lists" :key="i">
        <div :class="{'active': cI === checkIndex[i]}" @click="clickList(citem, cI, i)" class="li-list" v-for="(citem, cI) in item" :key="cI">
          <div class="radio"></div>{{citem}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityJs from './js'
export default {
  name: 'ElCity',
  props: {
    value: {
      type: [String, Number],
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      cityVal: '请选择',
      cityArr: [],
      checkIndex: [],
      cIndex: ['0'],
      cityBool: false
    }
  },
  created () {
    window.onclick = () => {
      this.cityBool = false
    }
  },
  watch: {
    cityArr (arr) {
      this.cityVal = arr.join('-')
      this.$emit('input', this.cityVal)
      this.$emit('change', {text: this.cityVal, citys: arr})
    }
  },
  computed: {
    lists () {
      let lists = []
      for (let i of this.cIndex) {
        if (cityJs[i]) {
          lists.push(cityJs[i])
        }
      }
      return lists
    }
  },
  methods: {
    clickList (name, key, i) {
      this.checkIndex[i] = key
      let cityArr = this.cityArr.slice(0, i + 1)
      cityArr[i] = name
      this.cityArr = cityArr
      let arr = this.cIndex.slice(0, i + 1)
      let text = `${arr[i]},${key}`
      if (arr[i + 1]) {
        arr[i + 1] = text
      } else {
        arr.push(text)
      }
      this.cIndex = arr
    }
  }
}
</script>

<style lang="scss" scoped>
.city-area{
  position: relative;
}
.city-input{
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  cursor: pointer;
  width: 200px;
  input{
    line-height: inherit;
    display: block;
    width: 100%;
    border-width: 0;
    padding: 0 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    &:active{
      border-color: transparent;
    }
  }
}
.city-lists{
  display: flex;
  margin-top: 4px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #dcdfe6;
  position: absolute;
  top: 48px;
  left: 0;
  z-index: 100;
  background: #fff;
  outline: none;
  height: 0;
  opacity: 0;
  transition: all 0.3s;
  &.ani-demo{
    opacity: 1;
    height: 200px;
  }
}
.city-list{
  border-right: 1px solid #dcdfe6;
  overflow: hidden;
  overflow-y: auto;
  flex-shrink: 0;
  height: 100%;
  &:last-child{
    border-right-width: 0;
  }
}
.li-list{
  line-height: 40px;
  cursor: pointer;
  padding: 0 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  &:hover{
    background: #f5f7fa;
  }
  &.active{
    color: #409eff;
    .radio{
      background: #409eff;
      border-color: #409eff;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .radio{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #dcdfe6;
    margin-right: 4px;
  }
}
.city-val{
  font-size: 14px;
  padding: 0 10px;
}
.city-list::-webkit-scrollbar{
  width: 6px;
  border-radius: 3px;
  background: transparent;
}
.city-list::-webkit-scrollbar-thumb {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #ccc;
  border: 0px solid #fff;
}
</style>