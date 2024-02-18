function solution(my_string, is_suffix) {
    var answer = [];
    //일단 접미사 배열을 만들자
    for(let i=0;i<my_string.length;i++){
        answer.push(my_string.slice(i,my_string.length))
    }
    if (answer.includes(is_suffix)){
        return 1
    }
    return 0;
}