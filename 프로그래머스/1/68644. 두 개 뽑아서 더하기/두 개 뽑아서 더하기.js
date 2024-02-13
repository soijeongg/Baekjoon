function solution(numbers) {
    var answer = [];
    let s= numbers.slice()
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if(!answer.includes(numbers[s]+numbers[j])){
            answer.push(numbers[i] +numbers[j]);
            }
        }
    }
     answer.sort((a, b) => a - b);
    answer = answer.filter((value, index) => answer.indexOf(value) === index);
    
    return answer;
}

/*
 answer = []
    numberss=numbers
    for i in numbers:
        for j in numberss:
            answer.append(i+j)
            numbers.remove(i)
    return answer
    내가 한 코드보고 찾기
    */