<template>
  <div id="app">
    <!-- <div class="header"></div> -->
    <div class="main">
      <div class="sidebar">
        <router-link to="test">Button 按钮</router-link>
      </div>
      <div class="view" id="ex-r-area">
        <router-view></router-view>
      </div>
    </div>
    <!-- <div class="footer"></div> -->
  </div>
  <!-- <div id="app">
    <base-main></base-main>
  </div> -->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
::-webkit-scrollbar{
  width: 10px;
  border-radius: 5px;
  background: transparent;
}
::-webkit-scrollbar-thumb {
  width:10px;
  height: 10px;
  border-radius: 5px;
  background: #ccc;
  border: 0px solid #fff;
}
html,
body {
  margin: 0;
}
.header,
.footer {
  height: 60px;
  background-color: antiquewhite;
}
.mb-20{
  margin-bottom: 20px;
}
.main {
  height: 100vh;
  display: flex;
}
.sidebar {
  height: 100%;
  overflow-y: auto;
  width: 200px;
  border-right: 1px solid #e4e4e4;
  >a{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    display: block;
    color: #000;
    text-decoration: none;
    &:hover{
      color: #409eff;
    }
  }
}
.view {
  flex: 1;
  padding-left: 30px;
  height: 100%;
  overflow-y: auto;
}
.view h2 a, .view h3 a, .view h4 a, .view h5 a{
  display: inline-block;
  margin-left: -20px;
  opacity: 0;
  cursor: pointer;
}
.view h2, .view h3, .view h4, .view h5{
  font-weight: 400;
  color: #1f2f3d;
  &:hover a{
    opacity: 0.4;
  }
}
.view  p{
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.highlight .html{
  line-height: 1.8;
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
  font-size: 12px;
  padding: 18px 24px;
  -webkit-font-smoothing: auto;
  display: block;
  overflow-x: auto;
}
.doctable{
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
  th, td{
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  td{
    color: #606266;
  }
}
</style>
