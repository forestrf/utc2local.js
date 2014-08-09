utc2local.js
===========
utc2local.js is a variation of the <a href="https://github.com/misjerrywu/utc2local.js">jQuery plugin utc2local.js</a> but with other options and without jQuery. it converts UTC(+00:00) time to user browser's local time.</p>

Example without formatting the date

 	<span class="datetime">2013-01-27 10:34:13</span>
	<script src="your copy of tc2local.js"></script>
	<script>
		utc2local(document.querySelectorAll('.datetime'));
	</script>

Example formatting the date

	<span class="datetime">2013-01-27 10:34:13</span>
	<script src="your copy of tc2local.js"></script>
	<script>
		utc2local(document.querySelectorAll('.datetime'), function(date){
			return date.getDate() + ' ' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][date.getMonth()] +' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		});
	</script>
