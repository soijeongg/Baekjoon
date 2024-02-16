function solution(s) {
  var answer = s.split(" ");
  let ss = "";
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      ss +=
        j % 2 == 0 ? answer[i][j].toUpperCase() : answer[i][j].toLowerCase();
    }
    //현재 split으로 나눈 값의 인덱스가 길이-1 맨 마지막보다 작으면 "" 추가
    if (i < answer.length - 1) {
      ss += " ";
    }
  }

  return ss;
}
//먼저 바꿀 문자열을 더할 변수를 하나 선언
//일단 " "를 기준으로 나누기 (단어별로 나눠야 하기 때문)
//먼저 for문을 써서 전체 길이만큼 for문을 돌린다음 한번 더 써서 안의 단어에 접근
//단어의 글자 하나하나 접근 하면서 인덱스가 짝수면 toUppercase() 홀수면 toLowerCase()
//근데 띄어쓰기를 구현 해야하는데 마지막만 째고 끝날때 넣으면 됨
//answer는 지금 단어하나하나 나눠져 있음 이 answer의 -1까지는 " "가 들어감
// 그래서 그게 아니면 + " "