var result = "";
for(var num = prompt("이진수로 바꿀 수를 입력하시오"); num > 0; num = parseInt(num / 2))
    result = (num % 2) + result;
alert(result);
