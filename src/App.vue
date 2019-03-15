<template>
  <div id="app" class="app">
    <view-box ref="viewBox">
      <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="{ showBack: false }">定顺广告</x-header>
      <router-view style="margin-top:46px;"></router-view>
      <tabbar>
        <tabbar-item selected link="/home">
          <img slot="icon" src="./assets/images/home1.png">
          <img slot="icon-active" src="./assets/images/home2.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/classify">
          <img slot="icon" src="./assets/images/classify1.png">
          <img slot="icon-active" src="./assets/images/classify2.png">
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item link="/car" badge="1">
          <img slot="icon" src="./assets/images/car1.png">
          <img slot="icon-active" src="./assets/images/car2.png">
          <span slot="label">订单</span>
        </tabbar-item>
        <tabbar-item link="/member">
          <img slot="icon" src="./assets/images/member1.png">
          <img slot="icon-active" src="./assets/images/member2.png">
          <span slot="label">会员</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, ViewBox } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    ViewBox
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
  .app {
    height:100%;
    .weui-tabbar::before {
      content: " ";
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      height: 1px;
      color: rgb(192, 191, 196);
      transform-origin: 0px 0px;
      transform: scaleY(0.5);
      border-top: 3px solid #ff8106;
    }
  }
}

</style>
