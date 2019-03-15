<template>
  <div>
    <router-link v-for="item in list" :key="item.id" :to="item.url">
      <ul class="flex flex-direction_row justify-content_flex-center align-items_center list vux-1px-b">
        <li class="list-left flex align-items_center">
          <img class="weui-media-box__thumb" :src="item.src" alt="">
        </li>
        <li class="list-right flex_1">
          <p class="title" v-html="item.title"></p>
          <div v-if="!car" class="flex flex-direction_row justify-content_flex-justify align-items_center num">
            <p class="sold">售出 <span v-text="item.sold"></span></p>
            <p class="moods">人气 <span v-text="item.moods"></span> </p>
          </div>
          <div class="flex flex-direction_row justify-content_flex-justify align-items_center price-con">
            <p class="price">¥667.00</p>
            <p v-if="car" class="car-num">x1</p>
          </div>
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    car: Boolean,
    list: Array
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.list{
  padding:10px 15px;
  font-size:14px;
  .list-left{
    margin-right: .8em;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background:#888;
    img{
      width: 100%;
      max-height: 100%;
      vertical-align: top;
    }
  }
  .list-right{
    .title{
      color:#404040;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .num{
      color:#999;
    }
    .price-con{
      padding-top:5px;
      .price{
        color:#ff2c2c;
      }
      .car-num{
        color:#999;
      }
    }

  }
}
</style>
