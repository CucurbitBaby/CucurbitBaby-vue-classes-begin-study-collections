import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';
import {stringify} from 'querystring';


// Content-Type: application/x-www-form-urlencoded 和
// Content-Type: application/json;charts=UTF-8 的区别
// axios默认是 json 提交post数据
// 1.后台入手
// 2.转为json数据  node有个queryString模块有个string 
const axios=Axios.create({
  transformRequest: [
    function (data){
      console.log('data', data)
      console.log('stringify(data)', stringify(data)) // a=55&b=99
      return stringify(data);
    }
  ]
});

let vm=new Vue({
  el: '#div1',
  data: {
    result: 0
  },
  async created(){
    let {data}=await axios({
      url: './data/sum.php',
      method: 'post',
      data: {a: 55, b: 99}
    });

    this.result=data;
  },
  template: `
  <div>
    {{result}}
  </div>
  `
})
