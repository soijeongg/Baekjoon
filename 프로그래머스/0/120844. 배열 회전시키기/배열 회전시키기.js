function solution(numbers, direction) {
    if(direction=="right"){
        let a = numbers.pop()
        numbers.unshift(a)
    }else{
        let a = numbers.shift()
        numbers.push(a)
    }
    return numbers;
}