function solution(t, p) {
    var answer = 0;
    let ss=[];
    for(let i=0;i<=t.length-p.length; i++){
       ss.push( t.slice(i,i+p.length))
    }
    ss = ss.filter((e,v)=> Number(e)<=Number(p))
    return ss.length;
}
//그니까 두번째의 길이를 받아서 그 수만큼 slice를 하고 하나씩 배열에 넣는다 
//이걸 넣고 필터 돌려서 Number(p)보다 작은거만 나오게 하기
