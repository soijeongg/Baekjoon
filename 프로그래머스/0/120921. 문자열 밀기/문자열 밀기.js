function solution(A, B) {
    if(A==B){
        return 0
    }

    for (let i = 0; i < A.length; i++) {
        // 문자열 A의 마지막 문자를 맨 앞으로 이동
        A = A.slice(-1) + A.slice(0, -1);

       
        if (A === B) {
            return i + 1; 
        }
    }

    
    return -1;
}

//밀어서 그렇게 될 수 있다면 몇번을 밀것인지
//민다 -> 마지막 글자를 pop하여 맨 앞에 shift한다 
//for문으로 돌려서 마지막까지 간다면(다시 돌아옴 근데 못했다 면 -1) answer++
//안되는거