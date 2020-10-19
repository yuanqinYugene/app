<template>
<div>
  <go-back></go-back>
  <div class="regi_cont">
    <p>
      手机号：
      <input type="text" v-model="user.phone" />
    </p>
    <hr>
    <p>
      昵称：
      <input type="text" v-model="user.nickname" />
    </p>
    <hr>
     <p>
      密码：
      <input type="password" v-model="user.password" />
    </p>
    <hr>
    <p><button @click='regi'>注册</button></p>
  </div>
  <!-- 提示信息，待整合成公共组件。。 -->
  <!-- <div v-show='isshow' class="isshow">{{msg}}</div> -->
</div>
</template>

<script>
import {reqRegi} from '../utils/request'
export default {
  data() {
    return {
      user: {
        phone:'',
        nickname:'',
        password:''
      },
      msg:'',
      isshow:false
    };
  },
  methods:{
    regi(){
      reqRegi(this.user.phone,this.user.nickname,this.user.password).then(res=>{
        // this.isshow=true;
        // this.msg=res.data.msg;
        // setTimeout(()=>{
          //     this.isshow=false;
        // },2000);
        alert(res.data.msg);
        if(res.data.code==200){
          this.$router.push("/login");
        }
      })
    }
  }
};
</script>

<style scoped>
.regi_cont{
    padding: 0.4rem;
    text-align: center;
}
input{
    height: 1rem;
    border: none;
    outline: none;
}
button{
    width: 100%;
    height: 1rem;
    margin-top: 0.3rem;
    border: none;
    border-radius: 0.1rem;
    background: #ff9900;
    font-size: 0.35rem;
    color: #fff;
    outline: none;
}
/* .isshow{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 4rem;
  height: 1rem;
  border-radius: 0.1rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
  line-height: 1rem;
} */
</style>