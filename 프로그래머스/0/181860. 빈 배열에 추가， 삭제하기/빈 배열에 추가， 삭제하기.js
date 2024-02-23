function solution(arr, flag) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(flag[i]==true){
            for(let j=0;j<arr[i]*2;j++){
            answer.push(arr[i])}
        }else{
           answer =  answer.slice(0, answer.length - arr[i]);
        }
    }
    return answer;
}
//길이가 같은 정수 배열 x가 주어짐 이때 flag을 차례로 순회하며 flag[i]가 true먄 arr[i]를 arr[i]*2추가 
//false라면 마지막arr[i]개의 원소 제거