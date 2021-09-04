import './app2.css'
import $ from "jQuery";
const $tableHead=$('#app2 .tableHead')
const $tableContent=$('#app2 .tableContent')



$tableHead.on('click','th',(e)=>{
  const $th=$(e.currentTarget)//currentTarget用户点击事件，注意target跟这个的区别
  $th.addClass('selected')
     .siblings().removeClass('selected')
  const index=$th.index()//找到点击的哪一个
  $tableContent.children()
    .eq(index).addClass('active')//eq是等与，等于点击的那一个，添加一个类,不要使用 .css .show .hide方法 样式与行为分离
    .siblings().removeClass('active')//找到它的兄弟，移除这个类
})

$tableHead.children().eq(0).trigger('click')//trigger 触发事件 让页面一进来就点击1