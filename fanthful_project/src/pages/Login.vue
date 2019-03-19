<!--登录-->
<template >
    <div id="container">
      <div class="reg" >
        <span style="float:right" @click="run">注册 </span>
      </div>
       <el-form :model="ruleForm"  status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
       <el-form-item label="登录账号" prop="username">
       <el-input v-model="ruleForm.username" placeholder="账号/手机号/邮箱号"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="password">
       <el-input v-model="ruleForm.password" placeholder="密码"> </el-input>
       </el-form-item>
        <el-checkbox v-model="checked">记住我</el-checkbox>
        <span style="float: right ;color:white;font-size:14px">忘记密码</span>
        <el-button type="danger" class="btn" @click="login">登录</el-button>  
       </el-form>
    </div>
</template>
<script>
export default {
  data(){
    
    return{
  checked: true,
   ruleForm:{
      account:"",
      password:""
    },
     rules: {
        checked:true,
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" },
          
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    login(){
          this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            // 保存用户名密
            localStorage.setItem('account',this.ruleForm.account);

            // this.$router.push('/home');
            if(this.$route.params.from){
                this.$router.push(this.$route.params.from);
            }else{
                this.$router.push('/home');
            }

          } else {
            return false;
          }
        });
      },
      run(){
        console.log(666);
        this.$router.push('/register')
      }
  },
  
	}
</script>
<style>
 #container{
    width: 80%;
    margin: auto;
  }
  #container .el-form-item__label {
    color:white!important;
  }
  #container .el-input__inner{
    color: white;
    background: black!important;
  }
  .btn{
    width:100%;
  }
#container .btn{
background-color:#bf1920;
  }
  #container .el-checkbox{
    color: #838383;
  }
  #container .is-checked .el-checkbox__label{
    color: #838383
  }
  #container .is-checked .el-checkbox__inner{
    background: black
  }
  #container .reg{
    height: 45px;
    border-bottom: 1px solid #838383;
    box-sizing: border-box;
    color: white;
    line-height: 44px;
    font-size: 14px;
  }
</style>

