<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-bind:label-width="labelwidth" class="boot-form">
    <el-form-item label="用户名" prop="username">
      <el-input type="text" v-model="ruleForm.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
    </el-form-item>  
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    <div>
      <p>当前在线用户：<code>{{cout}}</code></p> 
    </div>
    <el-alert class="login-info"
            v-if= "state"
            title="请登录"
            type="error" 
            show-icon>
    </el-alert> 
  </el-form>
</template>
 
<script>
  import 'scss/_code.scss'
  import {mapActions} from 'vuex'
  import {Exception, StringFormat, Format, Log} from 'utils'
  import {numspa} from 'filters'

  export default {
    name: 'loginform',
    props: ['labelwidth'],
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        cout: numspa(10000782937897, ' '),
        state: false,
        ruleForm: {
          password: 'admin',
          username: 'admin'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'userlogin'
      ]),
      submitForm (formName) {
        var vm = this
        console.log(vm.state)
        // var resurl = 'http://192.168.25.102:80/api/users'
        // var resurl = global.host + '/api/createusers'
        var resurl = global.host + '/webapi/createusers'

        vm.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!')
            // vm.$http.get(resurl)
            vm.$http.post(resurl, {
              'username': vm.ruleForm.username,
              'password': vm.ruleForm.password
            })
            .then(function (data) {
              console.log(data)
              // if (data.body.code === 0) {
              //   global.authdata = data.body.responseData
              //   sessionStorage.setItem('accessToken', global.authdata)
              //   vm.$router.push({path: '/home'})
              // }
              // 若在项目中使用，此处需做相应更改
              console.log(data.body[0].id)
              global.authdata = data.body[0].id
              // sessionStorage.setItem('accessToken', global.authdata)
              this.userlogin(Object.assign(vm.ruleForm, {
                'accessToken': global.authdata
              }))
              vm.$router.push({path: '/boot/home'})
            }, function (res) {
              // 测试统一异常处理工具
              try {
                throw new Exception('系统异常', '10001', vm)
              } catch (error) {
                console.log(error)
                // console.log(error.name)
                // console.log(error.message)
                // console.log(error.code)
              }
              // console.log(res)
              // 注：在此处做了假处理，为服务无法调通时能够进入系统中
              // 正式环境不需要此处代码
              global.authdata = '7758525'
              // sessionStorage.setItem('accessToken', global.authdata)
              this.userlogin(Object.assign(vm.ruleForm, {
                'accessToken': global.authdata
              }))
              vm.$router.push({path: '/boot/home'})
            })
          } else {
            // 测试日志工具
            Log('error submit!!')
            // 测试字符串格式化工具
            let s = StringFormat('【{0}】{1}', '2013-15-11', 'adsfasdfddad')
            console.log(s)
            // 测试日期格式化工具
            let d = Format(new Date(), 'yyyy-MM-dd hh:mm:ss')
            console.log(d)
            vm.state = true
            return false
          }
        })
      },
      resetForm (formName) {
        var vm = this
        vm.state = false
        vm.$refs[formName].resetFields()
      }
    }
  }
</script>
