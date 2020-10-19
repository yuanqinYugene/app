<template>
  <i @click="$router.go(-1)">返回</i>
</template>

<script>
export default {};
</script>

<style scoped>
i {
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 0.2rem;
  font-size: 0.4rem;
  color: #fff;
  line-height: 0.8rem;
  font-style: normal;
}
</style>