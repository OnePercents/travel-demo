<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">搜索<span class="iconfont">&#xe62d;</span></div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="stylus" scoped>
.header {
  display:flex;
  line-height: 43px;
  background-color:#00bcd4;
  color:#fff;
  width:100%;
}

.header-left {
  width: 22px;
  float: left;
  margin:0 10px;
}

.header-input {
  text-indent:10px;
  font-size :14px;
  flex:1;
  background:#fff;
  border-radius:4px;
  color:#eee;
  height:24px;
  line-height:24px;
  margin-top:10px;
}

.header-input span{
    margin-right:4px;
}

.header-right {
  width 60px;
  margin:0 10px;
  float: right;
  text-align:center;
}

.header-right span{
    font-size:10px;
    margin-left:4px;
}
</style>


