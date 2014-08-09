/**
 * @author Jerry Wu <mis.jerrywu@gmail.com>
 * @author Andrés Leone <forestrf@gmail.com>
 */
var utc2local = function(elem, format) {
	if(!(elem instanceof Array)){
		elem = [elem];
	}
	if(format === undefined){
		format = function(timeObject){
			return timeObject.getFullYear() + '-' + (timeObject.getMonth()+1) +'-' + timeObject.getDate() + ' ' + timeObject.getHours() + ':' + timeObject.getMinutes() + ':' + timeObject.getSeconds();
		}
	}
	var i = 0;
	while(i < elem.length){
		var utc_datetime = elem[i].innerHTML.trim();
		
		utc_datetime = utc_datetime.split(' ');
		utc_date = utc_datetime[0].split('-');
		utc_time = utc_datetime[1].split(':');
		utc_datetime = new Date(utc_date[0], +utc_date[1] - 1, utc_date[2], utc_time[0], utc_time[1], utc_time[2], 0);
		var local_datetime = utc_datetime;
		local_datetime.setMinutes(utc_datetime.getMinutes() - utc_datetime.getTimezoneOffset());
		
		elem[i++].innerHTML = format(local_datetime);
	}
}
