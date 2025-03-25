function solution(rsp) {
     let dict = {'2':'0','0':'5', '5':'2'}
     let answer =[]
     for(let a of rsp){
         answer.push(dict[a])
     }
    
    return answer.join("");
}

//가위는 2 바위는 0 보 5  모두 이기는 수를 구하라 -> 딕셔너리를 만들어 해당 키가 들어오면 값이 나오개ㅔ 한다