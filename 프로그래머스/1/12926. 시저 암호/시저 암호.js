function solution(s, n) {
  var answer = String(s).split("");
  let alphaA = "abcdefghijklmnopqrstuvwxyz";
  let alphab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  answer = answer.map((e, v) => {
    if (alphaA.includes(e)) {
      return alphaA[(alphaA.indexOf(e) + n) % 26];
    } else if (alphab.includes(e)) {
      return alphab[(alphab.indexOf(e) + n) % 26];
    } else {
      return e;
    }
  });

  return answer.join("");
}

//여기서 알 수 있는거 넘치면 다시 앞으로 넘어가야 한다 
//일단 대문자와 소문자로 만들어진 문자열을 만들어줌(어차피 인덱스를 가질려고 만든거라 배열이든 문자열이든 상관없을듯ㄱ
//들어온 문자열을 Split으로 나누고 그 원소 하나하나를 가지고 새로운 배열로 return 하기 위해 map 사용
//만약 element가 대문자 모아놓은거에 있으면 그 원소를 현재 element가 대문자배열에서 가지고 있는 인덱스오브에
//+n하고 인덱싱 하기 그리고 넘어오는거 방지하기 위해 %26(알파벳 수) 26보다 작으면 그대로 나오고 크면 26하고 남은거로 감
//이거 사실 그냥 2번씩 적으면 될거 같음 어차피 인덱스오브는 맨 처음 나오고 n은 25이하 자연수 라고 하니까 
//근데 더 커지면 이게 안먹지
//map 안의 리턴은 각 요소의 변환을 끝낸다는 의미 아예 끝내는게 아님