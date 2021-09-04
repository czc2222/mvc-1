import $ from 'jQuery'
import './app4.css'

const $round=$('#app4 .round')
$round.on('mouseenter',()=>{
  $round.addClass('active')
}).on('mouseleave',()=>{
  $round.removeClass('active')
})