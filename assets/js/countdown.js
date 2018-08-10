
/**
* Metis - Bootstrap-Admin-Template v2.2.2
* Author : Osman Nuri Okumus 
* Copyright 2014
* Licensed under MIT
*/
/* Start Countdown Settings */




var mytime = setInterval("disptime()",1); 

        function disptime(){  
	    var today=new Date();  
	    var FirstDate = new Date(2017,7,11,0,0,0,0);

	    var today_seconds = today.getTime();
	    var FirstDate_seconds = FirstDate.getTime();
	    var ALL = (today_seconds - FirstDate_seconds)
	    var ms = ALL%1000
	    var second = ALL%(1000 * 60)
            var minute = ALL%(1000 * 60 * 60) 
            var hour = ALL%(1000 * 60 * 60 * 24)
	
	    var day = (ALL - hour)/(1000 * 60 * 60 * 24)
	    var hour = (hour - minute)/(1000 * 60 * 60)
	    var minute = (minute - second)/(1000 * 60)
	    var second = (second - ms)/1000

			
		updateBar(day,hour,minute,second)
 
              
        }  
		
	var str = '《恋爱档案》<br>男生：陈希<br>女生：胡艺窈<br>恋爱开始时间：2017年08月11日<br>恋爱期限：+∞<br><br>今天是我们一周年纪念日<br>我们俩漂泊在北京<br>相依为命: )';
   	var i = 0;
   	function typing(){
    	var divTyping = document.getElementById('divTyping');
    		if (i <= str.length) {
     		divTyping.innerHTML = str.slice(0, i++) + '_';
     		setTimeout('typing()', 200);//递归调用
    	}
    	else{
     		divTyping.innerHTML = str;//结束打字,移除 _ 光标
    	}
   	}
   	typing();
function updateBar(day,hour,minute,second) {

    fillSecondBar(second);
    fillMinuteBar(minute);
    fillHourBar(hour);
    fillDayBar(day);
}

function fillSecondBar(percent) {
    $('#second-number').html(percent);
    $('#second-bar').css('width', percent * 100 / 60 + '%');
}

function fillMinuteBar(percent) {
    $('#minute-number').html(percent);
    $('#minute-bar').css('width', percent * 100 / 60 + '%');
}

function fillHourBar(percent) {
    $('#hour-number').html(percent);
    $('#hour-bar').css('width', percent * 100 / 24 + '%');
}

function fillDayBar(percent) {
    $('#day-number').html(percent);
    $('#day-bar').css('width', percent * 100 / 365 + '%');
}

function fillTotalbar(percent) {
    defaultPercent = 100 - 100 * percent / difToSecond;

    if (defaultPercent >= 10) {
        currentPercent = defaultPercent.toString().substr(0, 5);
    } else {
        currentPercent = defaultPercent.toString().substr(0, 4);
    }

    $('#total-bar').css('width', defaultPercent + '%').html(currentPercent + '%');
}




