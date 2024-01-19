function solution(array, height) {
    var answer = 0;
    //array안에 있는 값을 하나씩 뺴서 보다 크면 +1
    for (let i=0;i<array.length;i++){
        if(array[i]>height){
            answer+=1
        }
    }
    return answer;
}