<template>
  <div class="wrapper">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.pass"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitForm">登陆</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    submitForm () {
      console.log('login')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 500px;
  margin: 200px auto 0;
  text-align: center;
}
</style>
