function solution(array) {
    var answer = array.join("").split("");
    let count =0
    for(let i of answer ){
        if(i=="7"){
            count++
        }
    }
    return count;
}