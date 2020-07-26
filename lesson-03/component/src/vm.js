import Vue from 'vue/dist/vue.esm';
// import './cmp1';
import Cmp1 from './cmp1';
import MyDialog from './my-dialog';

/*
// 全局组件
let vm = new Vue({
  el: '#div1',
  data: {},
  template: `<div>
                <cmp1 />
              </div>`
})
//*/

/*
// 全局组件 给组件传值
let vm = new Vue({
  el: '#div1',
  data: {},
  template: `<div>
                <cmp1 name="blue1" />
              </div>`
})
//*/

/*
// 全局组件 给组件传值2
let vm = new Vue({
  el: '#div1',
  data: {},
  template: `<div>
                <cmp1 name="blue1" :list="[1,3,5,7,9]" />
              </div>`
})
//*/

/*
// 全局组件 动态组件
let vm = new Vue({
  el: '#div1',
  data: {
    type: 'cmp1'
  },
  // <components is="cmp1" name="blue2" :list="[1,3,5,7,9]" />
  template: `<div>
                <input type="text" v-model="type" />
                <components :is="type" name="blue2" :list="[1,3,5,7,9]" />
              </div>`
})
//*/


/*
// 组件 测试(interview)
let cmp=new Cmp1({
  // 动态传参
  propsData: {
    name: '张三',
    list: [88, 99, 27]
  }
});
// 虚拟vm对象
let vm=cmp.$mount();

console.log(vm.$el);

if(vm.$el.querySelector('li').innerHTML=='88'){
  console.log('正确');
}else{
  console.log('失败');
}
//*/


//*
// 插槽 创建一个组件  组件原本就有一些内容
// slot 插槽: 就是一占位符 反正将来用组件标签的时候 里面内容会插入slot 
// 有名字的就是 具名插槽
let vm=new Vue({
  el: '#div1',
  data: {
    type: ''
  },
  //局部组件
  template: `
<div>
  <my-dialog>
    <template slot="title">这是vm中使用template 插入的标题</template>
    my-dialog包裹的其他剩下的内容 会放进默认的my-dialog组件template中没有默认的slot /之中
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>
  </my-dialog>
</div>
`
})

//*/
