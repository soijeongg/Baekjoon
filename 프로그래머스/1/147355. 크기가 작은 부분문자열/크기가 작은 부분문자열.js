function solution(t, p) {
  let ss = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    ss.push(t.slice(i, i + p.length));
  }
  ss = ss.filter((e, v) => Number(e) <= Number(p));
  return ss.length;
}
//먼저 배열 하나 만듬 여기에 p의 길이만큼 slice 해줘야 함
//for문을 돌리는데 i=0부터 t-p까지 (한 이유는 slice가 제대로 그 수만큼 하기 위해 
//slice는  문자열의 길이를 넘어가는 경우, 빈 문자열을 반환 지금 숫자 개수 맞춰야 하는데 부족해도 나옴
//slice 하는데 i부터 i+p의 길이까지 어차피 자리 하나식 옮기는 거여서 
//필터를 걸어 element가 Number(p)보다 작은거만 남기기
//ss,length의 길이 리턴