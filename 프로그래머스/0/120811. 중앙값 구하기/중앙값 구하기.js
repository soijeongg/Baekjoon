function solution(array) {
    var answer = 0;
    //어떤값을 크기의 순서대로 정렬했을떄 중앙값 이거 sort하면 될거 같은데
    array.sort(function(a, b)  {
  return a - b;
});
    let index = Math.floor(array.length/2)
    return array[index];
}