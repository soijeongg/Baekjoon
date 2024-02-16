function solution(s) {
  let number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  number.forEach((e, i) => {
    s = s.split(e).join(i);
  });

  return Number(s);
}

//먼저 숫자에 대응하는 영단어의 배열을 만듬
//이 영어배열은 인덱스에 해당하는 영어가 값으로 들어있기 때문에 사용
//이배열을 foreach로 돌면서 s를 element기준으로 나누고 기준이 되는 문자는 사라짐 그리고 
//그리고 이 두 배열을 그 수의 인덱스를 가지고외서 붙음
//join은 안의 문자열을 붙잃때마다 넣음
//만약 s에 기준이 되는 문자열인 e가 없다면 그냥 넘어감