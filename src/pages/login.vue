<template>
  <div>
    <router-link to='/register' class="regi">注册</router-link>
    <div class="login_cont">
    <p>
      账号：
      <input type="text" v-model="user.phone" />
    </p>
    <hr>
     <p>
      密码：
      <input type="password" v-model="user.password" />
    </p>
    <hr>
    <p><a href="#">忘记密码</a></p>
    <p><button @click='login'>登录</button></p>
  </div>
  </div>
</template>

<script>
import {reqLogin} from '../utils/request'

export default {
  data() {
    return {
      user: {
        phone:'',
        password:''
      }
    };
  },
  methods:{
    login(){
      reqLogin(this.user.phone,this.user.password).then(res=>{
        alert(res.data.msg);
        if(res.data.code==200){
          // localStorage.setItem("token",res.data.list.token);
          localStorage.setItem("isLogin", true);
          this.$router.push("/index");
        }else{
          localStorage.setItem("isLogin", '');
        }
        
      })
    }
  }
};
</script>

<style scoped>
.regi{
  position: fixed;
  right: 0.2rem;
  top: 0;
  font-size: 0.4rem;
  color: #fff;
  line-height: 0.8rem;
  font-style: normal;
}
.login_cont{
    padding: 0.4rem;
    text-align: center;
}
input{
    height: 1rem;
    border: none;
    outline: none;
}
p:nth-child(5){
    text-align: right;
}
button{
    width: 100%;
    height: 1rem;
    border: none;
    border-radius: 0.1rem;
    background: #ff9900;
    font-size: 0.35rem;
    color: #fff;
    outline: none;
}
</style>