function solution(cards1, cards2, goal) {
    var answer = '';
        for(let i=0;i<goal.length;i++){
            if(goal[i]==cards1[0]){
                cards1.shift()
            }else if(goal[i] = cards2[0]){
                cards2.shift()
            }else if(goal[i] !== cards1[0]&&goal[i] !== cards2[0])
                answer = 'No'
            }
    answer = "Yes"
     return answer;
        }
    
   

//영어 단어가 적힌 카드 뭉치 2개 한장씩 가져와 카드를 사용한다 
//이 두개의 뭉치 card1, card2를 가지고 이 문장을 만들지 못한다면 no을 return 
//근데 먼저 나온 카드를 먼저 써야 한다 

//내 생각 그러니까 이 둘이 길이가 같다면 아  다르네 이게ㅓ while
//for문을 이 길이 만큼 돌리는데 goal의 첫마디를 만들고
//만들어지면 그쪽의 그걸 삭제한다 그리고 goal에서도 삭제하고 
//만약 goal이 남아 있다면 no을 리턴(근데 이건 둘 중 같은거 없을때 바로 break 하면돼)
