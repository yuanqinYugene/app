<template>
  <div>
    <header v-if="$route.name">{{$route.name}}</header>
    <router-view class="cont"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.8rem;
  background: #ff9900;
  font-size: 0.4rem;
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
  /* margin-bottom: 0.2rem; */
}
.cont{
  margin-top: 0.8rem;
}
</style>
