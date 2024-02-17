function solution(numbers) {
    var answer = 0;
    let count = []
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            count.push(numbers[i]*numbers[j])
        }
    }
    answer = Math.max(...count)
    return answer;
}