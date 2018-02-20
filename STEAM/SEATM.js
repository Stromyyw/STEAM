// 右边小图片鼠标移上事件逻辑
var $play_pic = $(".autoplay .left a")
$(".min_pic .min").mouseenter(function(){
	$play_pic.removeClass("show")
	for (var i = 0; i < $(".min_pic .min").length; i++) {
		$(".min_pic .min").eq(i).attr("data-num",i)
		a = $(this).attr("data-num")
		if (i == a) {
			$play_pic.eq(a).addClass("show")
		}
	}
})
$(".min_pic .min").mouseleave(function(){
	$play_pic.eq(a).removeClass("show")
})
// 左边弹出层轮播图逻辑
var $liList = $(".min_lbt .lbt_pic li")
$(".autoplay").mouseenter(function(){
	$(".min_lbt").fadeIn()
	min_autoplayTime = setInterval(function(){
		min_autoplay()
	},500)
})
$(".autoplay").mouseleave(function(){
	$(".min_lbt").fadeOut()
	clearInterval(min_autoplayTime)
})
var n = 0
function min_autoplay(){
	for (var i = 0; i < $liList.length; i++) {
	$liList.hide()
	}
	if (n < $liList.length-1) {
		n++
		$liList.eq(n).fadeIn()
		$liList.fadeOut()	
	}
	else{
		n = 0
		$liList.eq(n).fadeIn()
		$liList.fadeOut()
	}
}
// 主图第一个轮播图逻辑
var m = 0
var $lbt_first = $(".main").find(".main_lbt_1")
var count_1 = $lbt_first.length
var $next_1 = $(".main").find(".next")
var $prev_1 = $(".main").find(".prev")
var $picList_1 = $lbt_first
var dot_1 = $(".main").find(".dot")
var $spanList_1 = $(".main .dot").find(".span")
// 隐藏函数
function hide(arng){
	arng.hide()
}
// 显示函数
function fadeIn(arng){
	arng.eq(m).fadeIn()
}
// 下一张点击事件函数
function next_go(arng1,count,arng,arng4){
	$(arng1).click(function(){
		if (m < count - 1) {
			m++
			hide(arng)
			fadeIn(arng)
		}
		else{
			m = 0
			hide(arng)
			fadeIn(arng)
		}
		// updataspan(arng4)
	})
}
// 上一张点击事件函数
function prev_go(arng2,count,arng,arng4){
	$(arng2).click(function(){
		if (m !== 0) {
			m--
			hide(arng)
			fadeIn(arng)
		}
		else{
			m = count - 1
			hide(arng)
			fadeIn(arng)
		}
		// updataspan(arng4)
	})
}
// 自动播放逻辑
var firstTime = setInterval(function(){
	$next_1.click()
},2000)
$(".main").mouseenter(function(){
	clearInterval(firstTime)
})
$(".main").mouseleave(function(){
	firstTime = setInterval(function(){
		$next_1.click()
	},2000)
})
// 小圆点自动生成函数-----------------------------------有问题------------//
function createdot(count,arng3,arng,arng4,arng5){
	for (var i = 0; i < count; i++) {
		arng4 = $("<span></span>")
		arng4.attr(arng5,i)
		arng4.appendTo(arng3)
	}
	arng4 = arng3.find("span")
	arng4.eq(0).addClass("focus")
	// 小圆点点击事件
	arng4.click(function(){
		m = $(this).attr(arng5)
		hide(arng)
		arng.eq(m).fadeIn()
		// updataspan(arng4)
	})
}
// 小圆点颜色更新函数-----------------------------------有问题------------//
// function updataspan(arng4){
// 	arng4.removeClass("focus")
// 	arng4.eq(m).addClass("focus")
// }
// 判断是否点击当前轮播图的下一张按钮
if ($next_1) {
	next_go($next_1,count_1,$picList_1,$spanList_1)
} 
// 判断是否点击当前轮播图的上一张按钮
if ($prev_1) {
	prev_go($prev_1,count_1,$picList_1,$spanList_1)
}
// 更新并判断是否在当前轮播图的小圆点
if ($(".main")) {
	createdot(count_1,dot_1,$picList_1,$spanList_1,"index_1")
} 
// 主图第二个轮播图逻辑
var $lbt_second = $(".main_1").find(".main_lbt_2")
var count_2 = $lbt_second.length
var $next_2 = $(".main_1").find(".next")
var $prev_2 = $(".main_1").find(".prev")
var $picList_2 = $lbt_second
var dot_2 = $(".main_1").find(".dot")
var $spanList_2 = $(".main_1 .dot").find(".span")
// 判断是否点击当前轮播图的下一张按钮
if ($next_2) {
	next_go($next_2,count_2,$picList_2,$spanList_2)
} 
// 判断是否点击当前轮播图的上一张按钮
if ($prev_2) {
	prev_go($prev_2,count_2,$picList_2,$spanList_2)
}
// 更新并判断是否在当前轮播图的小圆点
if ($(".main_1")) {
	createdot(count_2,dot_2,$picList_2,$spanList_2,"index_2")
} 	
// 第二个轮播图倒计时事件
var $time = $("#hel_time")
// 倒计时函数
function upDate() {
	var dataline = new Date()
	var nowline = new Date()
	var ri =(dataline.setDate(15))
	var month =(dataline.setMonth(1))
	var hour =(dataline.setHours(0))
	var minute =(dataline.setMinutes(0))
	var second =(dataline.setSeconds(0))
	var S = (dataline - nowline)/1000 
	var Day = Math.floor(S/86400)
	var H_h = Day * 24
	var H = Math.floor((S-(Day*86400))/3600)
	var Min = Math.floor((S-Day*86400-H*3600)/60)
	var Sec = (S-Day*86400-H*3600-Min*60)
	var Secs = "0"
	if (Sec < 10) {
		Sec=Secs + Sec
	}
	if (Min < 10) {
		Min = Secs + Min
	}
	time = H_h + ":" + Min + ":" + Sec
	$time.html(time)
}
// 开启倒计时
upDate()	
setInterval(function(){
	upDate()
},1000)
// 主图第三个轮播图逻辑
var $lbt_third = $(".main_3").find(".main_lbt_3")
var count_3 = $lbt_third.length
var $next_3 = $(".main_3").find(".next")
var $prev_3 = $(".main_3").find(".prev")
var $picList_3 = $lbt_third
var dot_3 = $(".main_3").find(".dot")
var $spanList_3 = $(".main_3 .dot").find(".span")
// 判断是否点击当前轮播图的下一张按钮
if ($next_3) {
	next_go($next_3,count_3,$picList_3,$spanList_3)
} 
// 判断是否点击当前轮播图的上一张按钮
if ($prev_3) {
	prev_go($prev_3,count_3,$picList_3,$spanList_3)
}
// 更新并判断是否在当前轮播图的小圆点
if ($(".main_3")) {
	createdot(count_3,dot_3,$picList_3,$spanList_3,"index_3")
} 
// tab选项卡逻辑
var $details = $(".details_1")
// console.log($details)
$(".chose_list").mouseenter(function(){
	$details.hide()
	$(".chose_list").removeClass("chose_focus")
	for (var i = 0; i < $(".chose_list").length; i++) {
		 $(".chose_list").eq(i).attr("index_4",i)
		 b = $(this).attr("index_4")
		 if (i == b) {
		 	$details.eq(b).fadeIn("fast")
			$(".chose_list").eq(b).addClass("chose_focus")
		 }
	}
})
// 主图第四个轮播图逻辑
var $lbt_fourth = $(".main_5").find(".main_lbt_4")
var count_4 = $lbt_fourth.length
var $next_4 = $(".main_5").find(".next")
var $prev_4 = $(".main_5").find(".prev")
var $picList_4 = $lbt_fourth
var dot_4 = $(".main_5").find(".dot")
var $spanList_4 = $(".main_5 .dot").find(".span")
// 判断是否点击当前轮播图的下一张按钮
if ($next_4) {
	next_go($next_4,count_4,$picList_4,$spanList_4)
} 
// 判断是否点击当前轮播图的上一张按钮
if ($prev_4) {
	prev_go($prev_4,count_4,$picList_4,$spanList_4)
}
// 更新并判断是否在当前轮播图的小圆点
if ($(".main_5")) {
	createdot(count_4,dot_4,$picList_4,$spanList_4,"index_5")
} 