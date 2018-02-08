var $play_pic = $(".autoplay .left a")
var m = 0
var count = $(".autoplay").length
var $picList = $(".autoplay")
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
function hide(){
	$picList.hide()
}
function fadeIn(){
	$picList.eq(m).fadeIn()
}
$(".next").click(function(){
	if (m < count-1) {
		m++
		hide()
		fadeIn()
		updataspan()
	}
	else{
		m = 0
		hide()
		fadeIn()
		updataspan()
	}
})
$(".prev").click(function(){
	if (m !== 0) {
		m--
		hide()
		fadeIn()
		updataspan()
	}
	else{
		m = count-1
		hide()
		fadeIn()
		updataspan()
	}
})
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
// var firstTime = setInterval(function(){
// 	$(".next").click()
// },2000)
// $(".first").mouseenter(function(){
// 	clearInterval(firstTime)
// })
// $(".first").mouseleave(function(){
// 	firstTime = setInterval(function(){
// 		$(".next").click()
// 	},2000)
// })
for (var i = 0; i < count; i++) {
	var $spanList = $("<span></span>")
	$spanList.attr("index",i)
	$spanList.appendTo($(".dot"))
}
$spanList = $(".dot").find("span")
$spanList.eq(0).addClass("focus")
$spanList.click(function(){
	m = $(this).attr("index")
	hide()
	$picList.eq(m).fadeIn()
	updataspan()
})
function updataspan(){
	$spanList.removeClass("focus")
	$spanList.eq(m).addClass("focus")
}
var $time = $("#hel_time")
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
upDate()	
setInterval(function(){
	upDate()
},1000)