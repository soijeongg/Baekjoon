function solution(my_string) {
    var answer = '';
    for(let i of my_string){
        answer+=i.toLowerCase()
    }
    return answer.split("").sort().join("");
}