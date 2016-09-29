var one = document.getElementById('one'),
two = document.getElementById('two'),
operator = document.getElementById('operator'),
result = document.getElementById('result'),
cal = document.getElementById('calculate');


cal.addEventListener('click', function(){
	result.textContent = eval(one.value+operator.value+two.value);
})

