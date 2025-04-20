function solution(arr, intervals) {
    var answer = [];
    for(const int of intervals) {
        for(let i=int[0];i<int[1]+1;i++)
        answer.push(arr[i])
    }
    return answer;
}
//그러면 intervals를 돌면서 arr에서 찾기