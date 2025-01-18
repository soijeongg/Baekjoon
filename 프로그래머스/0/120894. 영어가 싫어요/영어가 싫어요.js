function solution(numbers) {
    var answer = 0;
    let a = Array.from(Array(10),(_,i)=> i )
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    for(let i=0;i<num.length;i++){
  numbers =   numbers.split(num[i]).join(a[i])        
    }
    return Number(numbers);
}
/* 영어로 표기되어 있는 숫자를 수로 바꾸려고 한다 
일단0부터 9까지 배열 만들기  */