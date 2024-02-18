function solution(my_string) {
    var answer = [];
    my_string = my_string.split("")
    for(let i of my_string){
        if(!answer.includes(i)){
            answer.push(i)
        }
    }
    return answer.join("");
}