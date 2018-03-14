// 1.获取需要的node节点||nodeList节点
function getobj(selector) {
	var str = selector.slice(1)
	if (selector[0] == "#") {
		return document.getElementById(str)
	}
	if (selector[0] == ".") {
		return document.getElementsByClassName(str)
	}
	if (selector[0] !== "#" && selector[0] !== ".") {
		return document.getElementsByTagName(selector)
	}
}
// 2.枚举后绑定事件并且执行fn函数
function bindEvent(nodeList,eventType,fn) {
	if (arguments.length == 2) {
		fn = arguments[1]
		eventType = "onclick"
	}
	for (var i = 0; i < nodeList.length; i++) {
		nodeList[i][eventType] = fn
	}
}

// 3.在node节点后插入clone的newElement节点
function insertAfter(newElement,node){
	return node.parentNode.insertBefore(newElement,node.nextSibling)
}

// 4.获取随机颜色值
function getRandomColor() {
	var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
	var result = "#"
	for (var b = 0; b < 6; b++) {
		var num = Math.floor(Math.random()*16)
		result += arr[num]       
	}
}
// 5.获取arg1所有class值为arg2的同级元素，返回结果为数组
function getspList(node,string){
	return node.getElementsByClassName(string);
}

// 6.重新实现nextSibling方法，直接找到下一个兄弟子元素节点
function nextSibling(obj){
	while(obj.nextSibling.nodeType !==1){
		obj = obj.nextSibling
		if (obj.nextSibling.nodeType==1) {
			return obj.nextSibling
		}
	}
}

// cookie相关函开始-------------------------------------------------------------//
// 获取cookie
function getCookie(lookup){
	var str = document.cookie
	var startIndex = str.indexOf(lookup)
	var endIndex = str.indexOf(";",startIndex)
	if (endIndex == -1) {
		endIndex = str.length
	}
	var result = str.slice(startIndex,endIndex).split("=")[1]
	return result
}
// 设置添加cookie
function setCookie(data,day){
	var d = new Date()
	d.setDate(day)
	for(var i in data){
		document.cookie = i + "=" + data[i] + ";" + "expires=" + d
	}
	return
}
// 删除某条cookie
function removeCookie(attrName){
	var d = new Date()
	d.setDate(d.getDate() - 1)
	document.cookie = attrName + "=" + ";" + "expires=" + d
}
// cookie相关结束-------------------------------------------------------------//

// 数字的断句
function stopnum(arr){
	// 声明一个空字符串用来存放筛选出来的数字
	var newarr = ""
	// 定义count为数字的总长度！！！不可以直接减1，减了之后会少循环一次
	var count = arr.length
	// 枚举num
	for (var i = 0; i < count; i++) {
		// 判断如果不为0并且取余3为0
		if (i % 3 == 0 && i !== 0) {
			// 则将num的第i个作为空字符串的一个数字，并且每次循环都要加上
				// 之前筛选出来的数字
			newarr = arr.charAt(count-i-1) + "," + newarr
		}
		// 如果不满足if语句的条件，则执行else
		else{
			// 同理，将num的第i个作为空字符串的一个数字，并且每次循环都要加上
				// 之前筛选出来的数字
			newarr = arr.charAt(count-i-1) + newarr
		}
		// ！！！if语句里面的newarr与else里面的newarr是互相继承的，不独立执行
		// 所以不必担心两次循环出来的newarr不相同而影响结果
		// 将新结果赋值给原数字
		return newarr
	}
}