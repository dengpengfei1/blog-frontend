<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="addUser">search</el-button>
    <li v-for="(item, index) in list" :key="index">
      <span>姓名：{{item.name}}</span>
      <span>年龄：{{item.age}}</span>
    </li>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
      input: '',
      list: []
    }
  },
  created () {
    axios.get('http://localhost:3000/list').then(res => {
      console.log(res)
      this.list = res.data
    })
    axios.get('http://localhost:3000').then(res => {
      console.log(res)
    })
  },
  methods: {
    addUser () {
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/add',
      //   data: {
      //     name: 'add',
      //     age: 0,
      //     gender: '男'
      //   },
      //   params: {
      //     name: 'add',
      //     age: 0,
      //     gender: '男'
      //   }
      // })
      axios.post('http://localhost:3000/add', qs.stringify({
        name: 'add2',
        age: 1,
        gender: '女'
      }), {
        params: {
          name: 'add',
          age: 0,
          gender: '男'
        }
      }).then(res => {
        console.log(res)
        axios.get('http://localhost:3000/list').then(res => {
          console.log(res)
          this.list = res.data
        })
      })
    }
  }
}
</script>
