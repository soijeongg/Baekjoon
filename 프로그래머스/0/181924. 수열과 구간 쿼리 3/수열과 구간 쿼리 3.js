function solution(arr, queries) {
    var answer = [];
    for(let i of queries){
        let temp = arr[i[0]]  //임시로 값을 가지고 있을것
        arr[i[0]] = arr[i[1]]
        arr[i[1]] = temp
    }
    return arr;
}
//arr와 2차원 배열이 주어짐 이 2차원 배열은 [i,j]
//2차원 배열의각 쿼리의 값을 가져와 arr[i]와 arr[j]의 값을 바꿈
//다시 return 
//그러면 일단 for문을 돌면서 