<template>
    <div class="app-register">
        <div class="page">
            <form action="">
               <div class="auth">
                    <div class="phone">
                        <input type="number" placeholder="请输入手机号">
                    </div>
                    <div class="picyz">
                        <input type="text" placeholder="请输入图形验证码">
                        <img src="http://img.daling.com/captcha/image/9257be54a81240a7b3b90fd01b0c8816.png" alt="">
                    </div>
                    <div class="sms">
                        <input type="number" placeholder="请输入短信验证码" class="dx">
                        <input type="button" value="获取短信验证码" class="hq">
    
                    </div>
               </div>
                <input type="submit" class="tj" value="登录">
            </form>
        </div>
        <div class="rlogo">
            
        </div>
    </div>
</template>

<script>
    export default{
        name:"app-register"
    }

</script>

<style>


</style>