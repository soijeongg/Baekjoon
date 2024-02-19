function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=> a-b)
    for(let i of d){
   if (budget >=i) {
        answer++
       budget = budget-i
        }else{
            break
        
    }
    }
    return answer;
}
//각 부서에 필요한 물품을 지원해주기 위해 부서별로 물품을 구매한는데 필요한 금액을 조사
//전체 예산이 정해져있어  다 사줄 수는 없지만 최대한 많은 부서의 물품을 사줄려고 함
//신청한만큼 전부 지원해줘야 한다 정확히 다 부서별로 선택한 금액은 d에 주어짐
//이거 그리디이니까 sort해서 가져와서 하나씩 빼야 겠는데
//ㄱ,ㄴ데 그러면 작은거부터 빼야겠다
//