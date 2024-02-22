function solution(s) {
    let cnt =0
    let zero =0
    while(s!=="1"){
        for(let i of s){
            if(i=="0"){
                zero++
            }
        }
    var answer = s.replaceAll(0, "")
   let real =  answer.length.toString(2);
    s  = real
        cnt++
    }
    return [cnt,zero]
}

/* 0과 1로 이루어진 문자열 x에 대해 이진변환
모든 0을제거하고 길이를 2진법으로 바꾼다 
그럼 일단 replaceall 하고 0을 없애고 2진법으로 변환 x가 근데 1이 되어야 한다고? 
이제 1이 되는 수는 구했고 0을몇번빼는지 찾지*/