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
$(".autoplay .all_lbt").mouseenter(function(){
	$(this).find(".min_lbt").fadeIn()
	var $liList = $(this).find(".min_lbt .lbt_pic li")
	min = 0
	min_lbtAutoplay = setInterval(function(){
		if(min < $liList.length - 1){
			min++
		}
		else{
			min = 0
		}
		$liList.hide()
		$liList.eq(min).fadeIn()
	},500)
}).mouseleave(function(){
		$(this).find(".min_lbt").fadeOut()
		clearInterval(min_lbtAutoplay)
		min = 0
	})
// 初始化索引值
for (var i = 0; i < $(".autoplay").length; i++) {
	var $all_lbtList =  $(".autoplay").eq(i).find(".all_lbt")
	var $spanList = $(".autoplay").eq(i).find(".dot").find("span")
	for(var j = 0; j < $all_lbtList.length; j++){
			$all_lbtList.eq(j).attr("index",j)
		}
		for(var j = 0; j < $spanList.length; j++){
			  $spanList.eq(j).attr("index",j)
		}
}
// 自动生成小圆点
for(var i = 0; i < $(".autoplay").length;i++){
	var count = $(".autoplay").eq(i).find(".all_lbt").length;
	for(var j = 0; j < count;j++){
		var $dotList = $("<span></span>")
		$dotList.appendTo($(".dot").eq(i))
		if(j == 0){
			$dotList.addClass("focus")
		}
	}
}
// 隐藏|显示函数
function hideORfadeIn(index,obj){
	var $dotList = $(obj).closest(".autoplay").find(".dot").find("span")
	// 隐藏图片和小圆点颜色
	$all_lbtList.hide()
	$all_lbtList.removeClass("focus")
	$dotList.removeClass("focus")
	// 显示图片和小圆点颜色
	$all_lbtList.eq(index).addClass("focus")
	$all_lbtList.eq(index).fadeIn()
	$dotList.eq(index).addClass("focus")
}
// 上一张点击事件
$(".prev").click(function(){
	$all_lbtList = $(this).closest(".autoplay").find(".all_lbt")
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if (i == 0) {
				hideORfadeIn($all_lbtList.length - 1,this)
			}
			else {
				hideORfadeIn(i-1,this)
			}
			break
		}
	}
})
// 下一张点击事件
$(".next").click(function(){
	$all_lbtList = $(this).closest(".autoplay").find(".all_lbt")
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if (i < $all_lbtList.length - 1) {
				hideORfadeIn(i+1,this)
			}
			else {
				hideORfadeIn(0,this)
			}
			break
		}
	}
})
// 自动播放逻辑函数
function autoNext(){
	$all_lbtList = $(".autoplay").eq(0).find(".all_lbt")
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if (i < $all_lbtList.length - 1) {
				hideORfadeIn(i+1,$(".autoplay").eq(0).find(".next"))
			}
			else {
				hideORfadeIn(0,$(".autoplay").eq(0).find(".next"))
			}
			break
		}
	}
}
// 小圆点点击事件
$(".dot span").click(function(){
	$all_lbtList = $(this).closest(".autoplay").find(".all_lbt")
	var m = $(this).index()
	for (var i = 0; i < $(".all_lbt").length; i++) {
		if($all_lbtList.eq(i).hasClass("focus")){
			hideORfadeIn(m,this)
			break
		}
	}
})
// // 自动播放逻辑
var firstTime = setInterval(function(){
	autoNext()
},2000)
$(".autoplay").eq(0).mouseenter(function(){
	clearInterval(firstTime)
})
$(".autoplay").eq(0).mouseleave(function(){
	firstTime = setInterval(function(){
		autoNext()
	},2000)
})
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
// // 主图第三个轮播图逻辑
// var $lbt_third = $(".main_3").find(".main_lbt_3")
// var count_3 = $lbt_third.length
// var $next_3 = $(".main_3").find(".next")
// var $prev_3 = $(".main_3").find(".prev")
// var $picList_3 = $lbt_third
// var dot_3 = $(".main_3").find(".dot")
// var $spanList_3 = $(".main_3 .dot").find(".span")
// // 判断是否点击当前轮播图的下一张按钮
// if ($next_3) {
// 	next_go($next_3,count_3,$picList_3,$spanList_3)
// } 
// // 判断是否点击当前轮播图的上一张按钮
// if ($prev_3) {
// 	prev_go($prev_3,count_3,$picList_3,$spanList_3)
// }
// // 更新并判断是否在当前轮播图的小圆点
// if ($(".main_3")) {
// 	createdot(count_3,dot_3,$picList_3,$spanList_3,"index_3")
// } 
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
// // 主图第四个轮播图逻辑
// var $lbt_fourth = $(".main_5").find(".main_lbt_4")
// var count_5 = $lbt_fourth.length
// var $next_5 = $(".main_5").find(".next")
// var $prev_5 = $(".main_5").find(".prev")
// var $picList_5 = $lbt_fourth
// var dot_5 = $(".main_5").find(".dot")
// var $spanList_5 = $(".main_5 .dot").find(".span")
// // 判断是否点击当前轮播图的下一张按钮
// if ($next_5) {
// 	next_go($next_5,count_5,$picList_5,$spanList_5)
// } 
// // 判断是否点击当前轮播图的上一张按钮
// if ($prev_5) {
// 	prev_go($prev_5,count_5,$picList_5,$spanList_5)
// }
// // 更新并判断是否在当前轮播图的小圆点
// if ($(".main_5")) {
// 	createdot(count_5,dot_5,$picList_5,$spanList_5,"index_5")
// }
// // 详情页————第一个轮播图逻辑
// var $lbt_fifth = $(".main_7").find(".main_lbt_7")
// var count_7 = $lbt_fifth.length
// var $next_7 = $(".main_7").find(".next")
// var $prev_7 = $(".main_7").find(".prev")
// var $picList_7 = $lbt_fifth
// var dot_7 = $(".main_7").find(".dot")
// var $spanList_7 = $(".main_7 .dot").find(".span")
// // 判断是否点击当前轮播图的下一张按钮
// if ($next_7) {
// 	next_go($next_7,count_7,$picList_7,$spanList_7)
// } 
// // 判断是否点击当前轮播图的上一张按钮
// if ($prev_7) {
// 	prev_go($prev_7,count_7,$picList_7,$spanList_7)
// }
// // 判断是否自动播放当前轮播图
// if ($(".main_7")) {
// 	autoplaypic($(".main_7"),$next_7)
// }
// // 详情页————第二个轮播图逻辑
// var $lbt_sixth = $(".main_8").find(".main_lbt_8")
// var count_8 = $lbt_sixth.length
// var $next_8 = $(".main_8").find(".next")
// var $prev_8 = $(".main_8").find(".prev")
// var $picList_8 = $lbt_sixth
// var x = 0
// var moregame_lbt = document.getElementsByClassName("moregame_lbt")[0]
// $next_8.click(function(){
// 	x++
// 	ml = parseInt(moregame_lbt.style.marginLeft)
// 	if (x < (count_8)-3) {
// 		moregame_lbt.style.marginLeft = ml + x*-205 + "px"
// 	}
// 	else{
// 		x = 0
// 		moregame_lbt.style.marginLeft = 0 + "px"
// 	}
// })