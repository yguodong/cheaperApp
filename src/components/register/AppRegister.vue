<template>
    <div class="my-login">
    
        <div class="log">
            <div class="user us"><input type="text" onkeypress="return event.keyCode>=48&&event.keyCode<=57" v-model="user" placeholder="手机号码"/><span :class="{active:cored!='获取验证码'}" @click="verUser()">{{cored}}</span></div>
            <div class="user"><input type="text" v-model="code" placeholder="短信验证码"/><b>{{newCode}}</b></div>
        </div>
        <div class="buttom" @click="submit">登录</div>
		<div class="register-img"></div>

    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  name:"my-login",
  data () {
      return {
          user:'',
          code:'',
          newCode:'',
          isShow:"",
          cored:'获取验证码'
      }
  },
  methods: {
      changeCoreed(){
          
            let ff = 60;
            let that = this
            let time = setInterval(()=>{
                this.cored = ff-- + "s后重新发送"
                    if(ff<=0){
                        clearInterval(time)
                        this.cored ='获取验证码'
                    }
            },1000)
          
      },
      isToast(type){
        Toast({
            message: type,
            position: 'middle',
            duration: 2000
        }); 
      },
      verUser(){//验证手机号
        var pattern = /^(13|14|15|17|18|19)[0-9]{9}$/;
        if(this.cored=='获取验证码'){
            if(this.user.length == 0){
                this.isToast("请输入手机号")
            }else if(pattern.test(this.user)){
                this.newCode = this.getCode()
                this.changeCoreed();
            }else{
                this.isToast("请输入正确的手机号")
            }
        }
        
      },
      getCode(){//验证码
          let str = 'qwertyuiopasdfghjklzxcvbnmWERTYUIOPASDFGHJKLZXCVBNM1234567890'
          let newStr = ''
          for(let i = 0; i < 4;i++){
            newStr +=str.charAt(Math.floor(Math.random()*(str.length-1)))
          }
          return newStr
      },
      submit(){
          if(this.user){//是否输入手机号
            if(this.code){//是否输入验证码
                if(this.code.toUpperCase() == this.newCode.toUpperCase()){
                    localStorage.axfInfo =  this.user
                    this.$router.push({path:'/main'})
                }else{
                    this.isToast("验证码不正确")
                }
            }else{
                this.isToast("请输入验证码")
            }
          }else{
              this.isToast("请输入手机号")
          }
      }
  }
} 
</script>
<style lang="scss" scoped>

</style>
