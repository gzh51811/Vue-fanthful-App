<template>
<div id="container">
    <div class="reg" style="text-align:center;margin-bottom:5px">注册</div>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
export default {
    data () {
        var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
            ruleForm2:{
                username:'',
                pass:'',
                checkpass:''
                      },
            rules2:{
          username:[{ required: true, message: "请输入用户名", trigger: "blur" },
          { min:6, max: 15, message: "长度在 6 到 15 个字符（字母，数字，下划线，减号）", trigger: "blur" },
          { pattern: /^[a-zA-Z0-9_-]{6,15}$/, message:'不允许输入空格等特殊符号'}],
          pass:[{ required: true, message: "请输入密码", trigger: "blur" },
          { min:6, message: "长度不能少于6个字符", trigger: "blur" }],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
            }           
        }
    },
    methods:{
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    

}
</script>
<style>
#container{
    width: 80%;
    margin: auto;
  }
</style>
