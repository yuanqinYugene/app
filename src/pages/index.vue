<template>
  <div>
    <!-- 二级路由出口 -->
    <router-view class="cont"></router-view>
    <footer>
      <!-- <router-link to='/index/home'>首页</router-link>
            <router-link to='/index/list'>分类</router-link>
            <router-link to='/index/cart'>购物车</router-link>
      <router-link to='/index/mine'>我的</router-link>-->
      <router-link v-for="item in tabNav" :key="item.path" :to="item.path" active-class="select">
        <img :src="$route.path==item.path?item.selImg:item.norImg">
        <p>{{item.text}}</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
import home_hig from "../assets/img/tab_home_hig.png";
import home_nor from "../assets/img/tab_home_nor.png";
import me_hig from "../assets/img/tab_me_hig.png";
import me_nor from "../assets/img/tab_me_nor.png";
import menu_hig from "../assets/img/tab_menu_hig.png";
import menu_nor from "../assets/img/tab_menu_nor.png";
import shopping_hig from "../assets/img/tab_shopping_hig.png";
import shopping_nor from "../assets/img/tab_shopping_nor.png";

export default {
  data() {
    return {
      home_hig,
      home_nor,
      me_hig,
      me_nor,
      menu_hig,
      menu_nor,
      shopping_hig,
      shopping_nor,

      tabNav: [
        {
          path: "/index/home",
          text: "首页",
          selImg: home_hig,
          norImg: home_nor
        },
        {
          path: "/index/list",
          text: "分类",
          selImg: menu_hig,
          norImg: menu_nor
        },
        {
          path: "/index/cart",
          text: "购物车",
          selImg: shopping_hig,
          norImg: shopping_nor
        },
        {
          path: "/index/mine",
          text: "我的",
          selImg: me_hig,
          norImg: me_nor
        }
      ]
    };
  }
};
</script>

<style scoped>
.cont {
  padding-bottom: 1.5rem;
}
footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  background: #fff;
}
footer a {
  flex: 1;
  text-align: center;
}
footer img {
  width: 0.4rem;
  height: 0.4rem;
}
footer p {
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.12rem;
}
.select p {
  color: #ff4400;
}
</style>