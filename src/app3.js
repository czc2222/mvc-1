import './app3.css'
import $ from 'jQuery'
const $square=$('#app3 .square')
$square.on('click',()=>{
  $square.toggleClass('active')  //toggle如果有就添加 没有就删除
})