function solution(a, b) {
    var answer = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let myDate = new Date(`2016-${a}-${b}`).getDay();
    let date = answer[myDate]

    return date;
}
//2016년 1월1은 금요일이다 그러면 2016년 a월 b일은 무슨 요일
//윤년이라 2월은 29일까지 있다 
//