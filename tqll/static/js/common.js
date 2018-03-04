function ResumeError(){return true;}window.onerror = ResumeError;

function CallFlash(flashUrl,flashWidth,flashHeight,flashWmode,flashVersion){document.write('<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+flashVersion+'" border="0" width="'+flashWidth+'" height="'+flashHeight+'">');document.write('<param name="movie" value="'+flashUrl+'">');document.write('<param name="quality" value="high"> ');document.write('<param name="wmode" value="'+flashWmode+'"> ');document.write('<param name="menu" value="false"> ');document.write('<embed src="'+flashUrl+'" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" name="FlashBanner" width="'+flashWidth+'" height="'+flashHeight+'" quality="High" wmode="transparent">');document.write('</embed>');document.write('</object>');}//normal version 8.0.24

function AddFavorite(sURL, sTitle) {sURL = encodeURI(sURL); try{window.external.addFavorite(sURL, sTitle);}catch(e) {try{window.sidebar.addPanel(sTitle, sURL, "");}catch (e) {alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");}}}
function SetHome(url){if (document.all) {document.body.style.behavior='url(#default#homepage)';document.body.setHomePage(url);}else{alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");}}

function showLocale(objD){var str;var yy = objD.getYear();if(yy<1900) yy = yy+1900;var MM = objD.getMonth()+1;if(MM<10) MM = '0' + MM;var dd = objD.getDate();if(dd<10) dd = '0' + dd;var ww = objD.getDay();if  (ww==0)  ww="星期日";if  (ww==1)  ww="星期一";if  (ww==2)  ww="星期二";if  (ww==3)  ww="星期三";if  (ww==4)  ww="星期四";if  (ww==5)  ww="星期五";if  (ww==6)  ww="星期六";str =yy + "年" + MM + "月" + dd + "日  " + ww;return(str);}
function thisDay(){var today;today = new Date();document.write('今天是：'+showLocale(today));}

function goPageTop(acceleration, goPageTopTime){acceleration = acceleration || 0.1;goPageTopTime = goPageTopTime || 16;var goPageTopX1 = 0;var goPageTopY1 = 0;var goPageTopX2 = 0;var goPageTopY2 = 0;var goPageTopX3 = 0;var goPageTopY3 = 0;if (document.documentElement){goPageTopX1 = document.documentElement.scrollLeft || 0;goPageTopY1 = document.documentElement.scrollTop || 0;}if (document.body){goPageTopX2 = document.body.scrollLeft || 0;goPageTopY2 = document.body.scrollTop || 0;}var goPageTopX3 = window.scrollX || 0;var goPageTopY3 = window.scrollY || 0;var goPageTopX = Math.max(goPageTopX1, Math.max(goPageTopX2, goPageTopX3));var goPageTopY = Math.max(goPageTopY1, Math.max(goPageTopY2, goPageTopY3));var goPageTopSpeed = 1 + acceleration;window.scrollTo(Math.floor(goPageTopX / goPageTopSpeed), Math.floor(goPageTopY / goPageTopSpeed));if(goPageTopX > 0 || goPageTopY > 0){	var invokeFunction = "goPageTop(" + acceleration + ", " + goPageTopTime + ")";window.setTimeout(invokeFunction, goPageTopTime);}}

function tabsV1(thisObj,Num){
if(thisObj.className == "lanmubox01")return;var tabObj = thisObj.parentNode.id;var tabList = document.getElementById(tabObj).getElementsByTagName("li");for(i=0; i <tabList.length; i++){if (i == Num){thisObj.className = "lanmubox01";document.getElementById(tabObj+"_content"+i).style.display = "block";}else{tabList[i].className = "lanmubox";document.getElementById(tabObj+"_content"+i).style.display = "none";}}}

function SetCwinHeight(iframeObj){if (document.getElementById){if (iframeObj){if (iframeObj.contentDocument && iframeObj.contentDocument.body.offsetHeight){iframeObj.height = iframeObj.contentDocument.body.offsetHeight;} else if (document.frames[iframeObj.name].document && document.frames[iframeObj.name].document.body.scrollHeight){  iframeObj.height = document.frames[iframeObj.name].document.body.scrollHeight;}}}}

function AutoScroll(obj){
	$(obj).find("ul:first").animate({
		marginTop:"-25px"
	},600,function(){
		$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
	});
}
$(document).ready(function(){
setInterval('AutoScroll("")',2000)
});

(function($){ 
$.fn.ImageResizeV1 = function(settings){ 
//一些默认配置； 
settings = $.extend({ 
height:0, 
width:0, 
loading:"static\/common\/image_loading.gif"
},settings);
var images = this; 
$(images).hide(); 
var loadding = new Image(); 
loadding.className="image_loadding" 
loadding.src = settings.loading; 
//$(images).after(loadding); 
//预加载 
var preLoad = function($this){ 
var img = new Image(); 
img.src = $this.src; 
if (img.complete) {
processImg.call($this);
return; 
} 
//$this.src = loadding.src;//会导致获取错误的尺寸
img.onload = function(){ 
//$this.src = this.src; //会导致获取错误的尺寸 
processImg.call($this); 
img.onload=function(){}; 
} 
} 
//计算图片尺寸； 
function processImg(){ 
//if(settings.height===0||settings.width ===0) return; 
var m = this.height-settings.height; 
var n = this.width - settings.width; 
if(m>n) 
this.height = this.height>settings.height ? settings.height : this.height; 
else 
this.width = this.width >settings.width ? settings.width : this.width;
$(this).next(".loadding").remove()
$(this).show();
var height = $(this).parent().height() //获取当前显示图片所在层的高
//alert(height)
if(height){
paddingtop = parseInt((height - $(this).height())/2)
if(paddingtop*2 !== height){
$(this).css("padding-top",paddingtop +"px")
$(this).css("padding-bottom",paddingtop +"px")
}
}
} 
return $(images).each(function(){ 
preLoad(this); 
}); 
} 
})(jQuery);

$.fn.extend({
	myMenu: function() {
		$(this).children('ul').children('li').hover(
			function() {
				if(!$(this).children('ul').hasClass('focus')) {
					$(this).addClass('focus');
					$(this).children('ul:first').stop(true, true).animate({ height:'show' }, 'fast');
				}
			},
			function() {
				$(this).removeClass('focus');
				$(this).children('ul:first').stop(true, true).animate({height:'hide', opacity:'hide'}, 'slow');
			}
		);
		$(this).children('ul').children('li').children('ul').hover(
			function() {
				$(this).addClass('focus');
			},
			function() {
				$(this).removeClass('focus');
			}
		);
	}
});
$(document).ready(function(){$('#abcNav').myMenu();});

/*focus image*/
$.fn.extend({     
   focusPlayerV1:function(options){
	var auto=null;
	var obj=$(this);
	count=$("a",obj).size();
	n=0;
	var settings={timer:3000,menu:".focusPlayer_text"};
	options = options || {};
        $.extend(settings, options);
	var ulcontent="<ul>";
	for(i=1;i<=count;i++){ulcontent=ulcontent+"<li>"+i+"</li>";}
	ulcontent=ulcontent+"</ul>";
	$(settings.menu).html(ulcontent);
    	$("a:not(:first-child)",this).hide();
	$(settings.menu+" li").eq(0).css({"background":"#F60","color":"#FFFF00"});
$(settings.menu+" li").click(function() {
	i = $(this).text()-1;
	n=i;
	if (n >= count) return;
	$("a",obj).filter(":visible").fadeOut(200,function(){$(this).parent().children().eq(n).fadeIn(400);});
	$(this).css({"background":"#F60","color":"#FFFF00","font-weight":"bold"}).siblings().css({"background":"#000","color":"#FFFFFF"});
	});
	auto = setInterval(showAuto, settings.timer);
	obj.hover(function(){clearInterval(auto)}, function(){auto = setInterval(showAuto, settings.timer);});
	function showAuto()
	{
		n = n >= (count - 1) ? 0 : ++n;
		$(settings.menu+" li").eq(n).trigger('click');
	}
}
});