function solution(arr, idx) {
    var answer = -1;
    for (let i =idx;i<arr.length;i++ ) {
        if(arr[i]===1) {
            return i
        }
    }
    return answer;
    
    //정수배열 arr가 주어짐 이때 안의 원소는 1또는 0 
    //수 idx가 주어지는데 애보다 크면서 값이 1인거 찾기 
    //그러면 애부터 for문을 돌리거나  split으로 짤라서 해도 되고 
}