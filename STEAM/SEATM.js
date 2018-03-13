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
// function autoNext(){
// 	$all_lbtList = $(".autoplay").eq(0).find(".all_lbt")
// 	for (var i = 0; i < $all_lbtList.length; i++) {
// 		if ($all_lbtList.eq(i).hasClass("focus")) {
// 			if (i < $all_lbtList.length - 1) {
// 				hideORfadeIn(i+1,$(".autoplay").eq(0).find(".next"))
// 			}
// 			else {
// 				hideORfadeIn(0,$(".autoplay").eq(0).find(".next"))
// 			}
// 			break
// 		}
// 	}
// }
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
// var firstTime = setInterval(function(){
// 	autoNext()
// },2000)
// $(".autoplay").eq(0).mouseenter(function(){
// 	clearInterval(firstTime)
// })
// $(".autoplay").eq(0).mouseleave(function(){
// 	firstTime = setInterval(function(){
// 		autoNext()
// 	},2000)
// })
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
var $dot_minList = $(this).closest(".dot_min").find("li")
var count = $(".dot_min").find("li").length
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
var mhlocal = false
$(".game_next").click(function(){
	var ml = parseInt($("._ul")[0].style.marginLeft)
	$all_lbtList = $(this).closest(".left_lbt").find(".main_lbt_7")
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if ((i+1) % 5 == 0) {
				nt = i + 1 
				if (!mhlocal) {
					if (count - nt < 5) {
						mhlocal = true
						main_lbt_7(nt,this)
						$("._ul").eq(0).animate({
							"marginLeft":ml-(count - nt)*120
						})
						break
					}
				}
			}	
			if ((i+1)%5 !== 0 && i !== 0 && i !== $all_lbtList.length-1) {
				main_lbt_7(i+1,this)
				break
			}
			if (i == 0) {
				main_lbt_7(i+1,this)
				break
			}
			if (i !== 0 && (i+1)%5 == 0 && count - nt < 5) {
				main_lbt_7(i+1,this)
				break
			}		
			if (i !== 0 && (i+1)%5 == 0 && i !== $all_lbtList.length - 1) {
				$("._ul").eq(0).animate({
					"marginLeft":-nt * 120
				})
				main_lbt_7(i+1,this)
				break
			}
			else {
				main_lbt_7(0,this)
				$("._ul").eq(0).animate({
					"marginLeft":0
				})
				mhlocal = false
				break
			}
		}	
	}
})
$(".game_prev").click(function(){
	$all_lbtList = $(this).closest(".left_lbt").find(".main_lbt_7")
	var ml = parseInt($("._ul")[0].style.marginLeft)
	for (var i = 0; i < $all_lbtList.length; i++) {
		if ($all_lbtList.eq(i).hasClass("focus")) {
			if (i !== 0 && i + 1 == 5) {
				main_lbt_7(i-1,this)
				break
			}
			if (i == 0) {
				main_lbt_7($all_lbtList.length - 1,this)
				$("._ul").eq(0).animate({
					"marginLeft":-(count - 5) * 120
				})
				break
			}
			else{
				main_lbt_7(i-1,this)
				break
			}
		}	
	}
})

// 登录页cookies记录
var set = {}
window.onload = function(){
	$(".cook").click(function(){
		if ($("#seven")[0].checked) {
			set.username = $(".name").val()
			set.password = $(".pass").val()
		}
		setCookie(set,30)
	})
		$(".name").val(getCookie("userName"))
		$(".pass").val(getCookie("passWord"))
}

// 首页第一个轮播图ajax
function callbackfn(data){
	$imgUrl = $(".main_lbt_1").eq(0).find(".left").find("a").find("img")
	$gameDetails = $(".main_lbt_1").eq(0).find(".left").find("#details")
	$imgMinUrl = $(".main_lbt_1").eq(0).find(".right").find(".min_pic").find("img")
	$imgSpan = $(".main_lbt_1").eq(0).find(".left").find(".left_lbt")
	$imgMinLbtUrl = $(".main_lbt_1").eq(0).find(".min_lbt").find(".lbt_pic").find("img")
	$gameName = $(".Name").eq(0).find("a")
	$MingameName = $(".main_lbt_1").eq(0).find(".min_lbt").find(".days_1")
	$MingameDay = $(".main_lbt_1").eq(0).find(".min_lbt").find(".days_2")
	$allpince = $(".main_lbt_1").eq(0).find(".min_lbt").find(".allpince")
	$lableliList = $(".main_lbt_1").eq(0).find(".min_lbt").find(".list").find("li")
	$zheKou = $(".main_lbt_1").eq(0).find(".right").find(".zhekou").find(".zhekounum")
	$bottOld = $(".main_lbt_1").eq(0).find(".right").find(".bott").find(".bottold")
	$bottNow = $(".main_lbt_1").eq(0).find(".right").find(".bott").find(".bottnow")
	$win = $(".main_lbt_1").eq(0).find(".right").find(".bott").find(".win")
		console.log(data)
	for (var m = 0; m < data.length; m++) {
		// var newmain = $(".main_lbt_1").clone(true)
		// $(".body").appendTo(newmain)
		Name = data[m].name
		bgUrl = data[m].url
		urlList = (data[m].imgUrl)
		minDay = data[m].date
		arr = minDay.split("-")
		gameThink = data[m].evaluate
		pince = data[m].evaluatingCount
		lableList = data[m].label
		zhekouOr = data[m].isSale
		bottOldNum = data[m].originPrice
		bottNowNum = data[m].price
		zhekouhow = data[m].discount
		Win = data[m].platform
		for (var a = 0; a < urlList.length; a++) {
			Url = urlList[a]
			$gameName.html(Name)
			$MingameName.html(Name)
			$imgMinUrl.eq(a).attr("src",Url)
			$imgMinLbtUrl.eq(a).attr("src",Url)
			$imgUrl.eq(a).attr("src",Url)
			$gameDetails.eq(a).attr("href",bgUrl)
			$imgSpan[0].style.backgroundImage = "url" + "(" + urlList[0] + ")"
			$MingameDay.eq(0).html("发行于：" + arr[0] + "年" + arr[1] + "月" + arr[2] + "日")
			if (gameThink == 1) {
				$allpince.html("好评如潮 " + "(" + pince + ")")
			}
			if (gameThink == 2) {
				$allpince.html("特别好评 " + "(" + pince + ")")
			}
			if (gameThink == 3) {
				$allpince.html("多半好评 " + "(" + pince + ")")
			}
			if (gameThink == 4) {
				$allpince.html("褒贬不一 " + "(" + pince + ")")
			}
			if (gameThink == 5) {
				$allpince.html("多半差评 " + "(" + pince + ")")
			}
			if (gameThink == 6) {
				$allpince.html("差评如潮 " + "(" + pince + ")")
			}
			if (gameThink == 7) {
				$allpince.html("无评论 " + "(" + pince + ")")
			}
			if (zhekouOr) {
				$zheKou.html("-" + zhekouhow * 100 + "%")
				$bottOld.html("￥" + bottOldNum)
				$bottNow.html("￥" + bottNowNum)
			}
			// if (Win.length == 3) {
			// 	$win[2].style.backgroundImage = "url" + "(" + "images/st.png" + ")"
			// 	$win[1].style.backgroundImage = "url" + "(" + "images/ios.png" + ")"
			// 	$win[0].style.backgroundImage = "url" + "(" + "images/win.png" + ")"
			// }
			// if (Win.length == 2) {
			// 	if (Windows) {
			// 		$win[0].style.backgroundImage = "url" + "(" + "images/win.png" + ")"	
			// 	}
			// 	if (MacOS) {
			// 		$win[Win.length-1].style.backgroundImage = "url" + "(" + "images/ios.png" + ")"	
			// 	}
			// 	if (Steam) {
			// 		$win[Win.length-1].style.backgroundImage = "url" + "(" + "images/st.png" + ")"	
			// 	}
			// }
			// if (Win.length == 1) {
			// 	if (Windows) {
			// 		$win[0].style.backgroundImage = "url" + "(" + "images/win.png" + ")"	
			// 	}
			// 	if (MacOS) {
			// 		$win[0].style.backgroundImage = "url" + "(" + "images/ios.png" + ")"	
			// 	}
			// 	if (Steam) {
			// 		$win[0].style.backgroundImage = "url" + "(" + "images/st.png" + ")"	
			// 	}
			// }
		}
		for (var b = 0; b < 6; b++) {
			$lableliList.eq(b).html(lableList[b])
		}
	}	
}
window.onload = function(){
	var script = document.createElement("script")
	script.setAttribute("src","http://www.qinsichina.com/steamDataAPI.php?callback=callbackfn")
	document.getElementsByTagName("head")[0].appendChild(script)
}