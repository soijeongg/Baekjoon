function solution(sizes) {

  let long = [];
  let short = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i][0] > sizes[i][1]
      ? long.push(sizes[i][0]) && short.push(sizes[i][1])
      : long.push(sizes[i][1]) && short.push(sizes[i][0]);
  }
  let max_long = Math.max(...long);
  let max_short = Math.max(...short);
  return max_long * max_short;
}

//모든 명함이 들어갈 수 있는 크기가 되어야 한다 
//처음에는 일단 가로 세로 구분 없이 둘을 몰아놓을려고 했는데 그렇게 했다가는 하나가 두번선택될 수 있어
//근데 돌려도 된다 그러면 긴변과 짧은 변으로 나눠서 두근데로 push하고 그 중 큰 수를 가져와서 곱하자
//긴변을 저장할 long과 짧은 변을 저장할 short 배열 만들기
//하나의 가로 세로 구분은 돌리는걸로 없어졌지만 둘이 구분을 해야 해서 긴변 짧은변으로 나눔
//for문을 돌리는데 전체 size만큼의 개수만큼 그리고 안의 원소에 접근
//어차피 두개여서 [i][0], [i][1]로 접근
//[i][0]이 더 크면 [i][0]을 long에 넣고 short에는 [i][1]을 넣음
//반대면 그 반대
//긴변중 가장 긴변을 찾기 위해 스프레드 연산자 사용하고 math.max해서 최대값, 짧은변도 하기
//둘이 곱하기 