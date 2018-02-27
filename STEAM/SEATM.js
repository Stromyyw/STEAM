// 礼物卡小背景图逻辑
for (var i = 0; i < $("i").length; i++) {
	$("i").eq(i).css("background-position",i*-16 + "px" + " 0" )
}
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
	},1000)
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
// tab选项卡逻辑
var $chose_liList = $(".main_4").find(".chose li")
$chose_liList.click(function(){
	$chose_liList.removeClass("focus")
	$chose_liList.removeClass("chose_this")
	hidetab()
	$(".chose_whichone").removeClass("whichone_focus")
	w = $(this).index()
	$(".chose_whichone").eq(w).addClass("whichone_focus")
	$chose_liList.eq(w).addClass("focus")
	$chose_liList.eq(w).addClass("chose_this")
	showtab(0)
})
var $details = $(this).closest(".chose_whichone").find(".details_1")
var $this_chose_list = $(this).closest(".chose_whichone").find(".chose_list")
function hidetab() {
	$details.hide()
	$this_chose_list.removeClass("chose_focus")
	$this_chose_list.find("h4").removeClass("h4_focus")
	$this_chose_list.find("p").removeClass("h4_focus")
}
function showtab(argn_this) {
	$details.eq(argn_this).fadeIn("fast")
	$this_chose_list.eq(argn_this).addClass("chose_focus")
	$this_chose_list.eq(argn_this) .find("h4").addClass("h4_focus")
	$this_chose_list.eq(argn_this) .find("p").addClass("h4_focus")
}
$(".chose_list").mouseenter(function(){
	$details = $(this).closest(".chose_whichone").find(".details_1")
	$this_chose_list = $(this).closest(".chose_whichone").find(".chose_list")
	hidetab()
	for (var i = 0; i < $this_chose_list.length; i++) {
		$this_chose_list.eq(i).attr("index_4",i)
		b = $(this).attr("index_4")
		if (i == b) {
			showtab(b)
		}
	}
})
// 详情页的轮播图逻辑
$(".dot_min li").click(function(){
	$all_lbtList = $(this).closest(".left_lbt").find(".main_lbt_7")
	$all_lbtList.hide()
	$dot_minList =$(this).closest(".dot_min").find("li")
	$dot_minList.removeClass("dot_min_bd")
	m = $(this).index()
	for (var i = 0; i < $("li").length; i++) {
		if($all_lbtList.eq(i).hasClass("focus")){
			main_lbt_7(m,this)
			break
		}
	}
})
function main_lbt_7(index,obj){
	var $dot_minList = $(obj).closest(".left_lbt").find(".dot_min").find("li")
	// 隐藏图片和小圆点颜色
	$all_lbtList.hide()
	$all_lbtList.removeClass("focus")
	$dot_minList.removeClass("dot_min_bd")
	// 显示图片和小圆点颜色
	$all_lbtList.eq(index).addClass("focus")
	$all_lbtList.eq(index).fadeIn()
	$dot_minList.eq(index).addClass("dot_min_bd")
}
$(".game_next").click(function(){
	var ml = parseInt($(".ul")[0].style.marginLeft)
	$all_lbtList = $(this).closest(".left_lbt").find(".main_lbt_7")
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if ((i+1)%5 !== 0 && i !== 0 && i !== $all_lbtList.length-1) {
				main_lbt_7(i+1,this)
				break
			}
			if (i == 0) {
				main_lbt_7(i+1,this)
				break
			}
			if (i !== 0 && (i+1)%5 == 0 && i !== $all_lbtList.length - 1) {
				main_lbt_7(i+1,this)
				$(".ul")[0].style.marginLeft = ml - 600 + "px"
				break
			}
			else {
				main_lbt_7(0,this)
				$(".ul")[0].style.marginLeft = 0 + "px"
				break
			}
		}	
	}
})
$(".game_prev").click(function(){
	$all_lbtList = $(this).closest(".left_lbt").find(".main_lbt_7")
	var ml = parseInt($(".ul")[0].style.marginLeft)
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if (i !== 0 && i%5 !== 0) {
				main_lbt_7(i-1,this)
				break
			}
			if (i == 0) {
				main_lbt_7($all_lbtList.length - 1,this)
				$(".ul")[0].style.marginLeft = -600 + "px"
				break
			}
			if (i !== 0 && i%5 == 0) {
				main_lbt_7(i-1,this)
				$(".ul")[0].style.marginLeft =ml - (-600) + "px"
				break
			}
		}	
	}
})
var main_lbt_7autoplay = setInterval(function(){
	$(".game_next").click()
},2000)
$(".game_bg .left_lbt").mouseenter(function(){
	clearInterval(main_lbt_7autoplay)
})
$(".game_bg .left_lbt").mouseleave(function(){
	main_lbt_7autoplay = setInterval(function(){
		$(".game_next").click()
	},2000)
})