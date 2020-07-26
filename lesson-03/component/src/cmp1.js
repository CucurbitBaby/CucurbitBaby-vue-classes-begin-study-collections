import Vue from 'vue/dist/vue.esm';

/*

// 组件也是一个vm对象
let vm = new Vue({
  el:'#div1',
  data: {},     // data在vm里可以是一个对象 组件里面必须是data()函数
  // 也可以让vm自带一个template
  template: '<div id="div1"> <cmp1 /> </div>',
  // 局部组件
  components: {
    cmp1: {
      data() {
        return {
          a: 18
        }
      },
      template: '<div>cmp1内容: {{a}} </cmp1></div>'
    }
  }
})

//*/


/*
// 全局组件
Vue.component('cmp1', {
  data(){
    return {a: 78, b: 55};
  },
  template: `
          <div>
            result = {{a+b}}
          </div>
          `
});

//*/


/*
// 全局组件 给组件传值
export default Vue.component('cmp1', {
  props: ['name'],
  data(){
    return {a: 77, b: 55};
  },
  template: `
          <div>
            姓名：{{name}}<br/>
          </div>
          `
});

//*/



//  *
// 全局组件 给组件传值2
export default Vue.component('cmp1', {
  props: ['name', 'list'],
  data(){
    return {a: 77, b: 55};
  },
  template: `
          <div>
            姓名：{{name}}<br/>
            <ul>
              <li v-for="item in list">{{item}}</li>
            </ul>
          </div>
          `
});

//*/
