
function solution(strings, n) {


  strings.sort((a, b) => {
    let alphaA = a[n];
    let alphaB = b[n];
    if (alphaA === alphaB) {
      return a.localeCompare(b);
    } else {
      return alphaA.localeCompare(alphaB);
    }
  });

  return strings;
}

//sort를 하는데 인덱스의 n을 기준으로 오름차순 정렬이여서 스트링의 각 수의 n번째 인덱스를 가진거 가져옴
//만약 이 둘이 다르면 이 둘을 기준으로 localeCompare 정렬
//localeCompare는 앞의 문자열(참조문자열)이 ()안의 문자열보다 앞에 나오는것보다 늦게 나오면 1, 반대면 -1
//그리고 만약 같다면 그냥 a,b 전체 비교 
//그리고 나온 숫자들을 이용해 정렬
//결국 두수를 -1,1이 둘로 바꿔서 숫자들을 오름차순 하는거