var num = prompt("이진수로 바꿀 수를 입력하시오(주의 : 무조건 자연수만 입력하시오!)");
var now_num = num;
var result = "";
while (now_num != 1) {
    if (now_num % 2 == 0) {
        result = "0" + result;
    }
    else {
        result = "1" + result;
    }
    now_num = parseInt(now_num / 2);
}
result = "1" + result;
alert(num + "을 이진수로 바꾼 수는 " + result + "입니다");
