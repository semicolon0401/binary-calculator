var result = "";
for(var num = prompt("이진수로 바꿀 수를 입력하시오"); num > 1; num = parseInt(num / 2))
    result = (num % 2) + result;
alert("1" + result);
