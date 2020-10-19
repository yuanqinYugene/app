<template>
  <div class="home">
    <header>
      <img src="../assets/img/img/home/logo.jpg" alt />
      <input type="text" placeholder="寻找商品" />
    </header>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe clearfix" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="'/api'+item.img">
      </van-swipe-item>
    </van-swipe>

    <div class="xianshi">
      <img src="../assets/img/img/home/1.jpg" alt />
      <img src="../assets/img/img/home/1.jpg" alt />
      <img src="../assets/img/img/home/1.jpg" alt />
      <img src="../assets/img/img/home/1.jpg" alt />
    </div>
    <ul class="nav">
      <li>限时抢购</li>
      <li>积分商城</li>
      <li>联系我们</li>
      <li>商品分类</li>
    </ul>
    <ul class="cont">
      <li v-for="(item) in contList" :key="item.id" class="clearfix cont_li" is='router-link' to='/proDetail'>
        <img :src="'/api'+item.img" alt />
        <div class="right">
          <h4>{{item.goodsname}}</h4>
          <strong>￥{{item.price}}</strong>
          <button>立即抢购</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqBanner, reqCont } from "../utils/request";
export default {
  data() {
    return {
      bannerList: [],
      contList: []
    };
  },
  mounted() {
    reqBanner().then(res => {
      this.bannerList = res.data.list;
    });
    reqCont().then(res => {
      this.contList = res.data.list[0].content;
    });
  }
};
</script>

<style scoped>
.home{
  margin-top: -0.8rem;
}
header {
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
header > img {
  width: 30%;
  height: 0.5rem;
}
header > input {
  width: 30%;
  height: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  margin-left: 1rem;
  background: #ccc;
  text-align: center;
  vertical-align: top;
}
.my-swipe .van-swipe-item>img {
  width: 100%;
  height: 4rem;
}
.xianshi {
  width: 100%;
  font-size: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.xianshi>img {
  width: 22%;
}
.nav {
  width: 100%;
  font-size: 0.16rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nav li {
  width: 23%;
  text-align: center;
}
.cont .cont_li>img {
  float: left;
  width: 2rem;
  height: 2rem;
}
.cont .right{
  float: left;
}
.cont .right button{
  border: none;
  border-radius: 0.1rem;
  background: #ff9900;
  padding: 0 0.2rem;
  color: #fff;
}
</style>