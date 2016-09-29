var input = document.querySelectorAll('.input');

window.last_id = 'one';
input.forEach(function(item,last_id){
	item.addEventListener('focus',function(last_id){
		window.last_id = this.id;
	});
})


var keys = document.querySelectorAll('.keys');
keys.forEach(function(item){
	item.addEventListener('click',function(){
		var last_input = document.getElementById(window.last_id);
		if (item.title == 'C') {
			last_input.value = 0
		}else if (item.title == 'Back') {
			last_input.value = last_input.value.slice(0,-1);
		}else {
			if (last_input.value*1==0&&item.title =='0') {
				return;
			};
			last_input.value = last_input.value*10+item.title*1;
		};
		
	});
})
