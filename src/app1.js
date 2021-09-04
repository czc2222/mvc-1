import $ from "jQuery";

const $button1=$("#add1")
const $button2 = $("#minus")
const $button3 = $("#multiply")
const $button4=$("#divide")
const $number=$("#number")
const n=localStorage.getItem('y')//初始化n的值就是存的值
$number.text(n||100)//text中的值是n，如果没有n的值 那么就是100

$button1.on('click',()=>{//由于页面已经加载完成,再追加元素用on事件
  let n = parseInt($number.text())//字符串转数字
  n+=1
  localStorage.setItem('y',n)//将n的值存在y上
  $number.text(n)//重新返回给text里
})
$button2.on('click',()=>{
  let n = parseInt($number.text())
  n -=1
  localStorage.setItem('y',n)
  $number.text(n)
})
$button3.on('click',()=>{
  let n = parseInt($number.text())
  n *=2
  localStorage.setItem('y',n)
  $number.text(n)
})
$button4.on('click',()=>{
  let n = parseInt($number.text())
  n /=2
  localStorage.setItem('y',n)
  $number.text(n)
})