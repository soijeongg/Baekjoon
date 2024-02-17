function solution(s) {
    var answer = [];
    while (s.length > 0) {
        let x = s[0]; // 첫 글자를 x로 지정
        let xCount = 0; // x의 출현 횟수
        let other = 0; // x가 아닌 다른 글자의 출현 횟수
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === x) {
                xCount++;
            } else {
                other++;
            }
            //계속 진행하면서 횟수를 계산
            
             if (xCount === other) {
                answer.push(s.slice(0, i + 1)); // 지금까지 읽은 문자열을 분리하여 배열에 추가
                s = s.slice(i + 1); // 분리한 부분을 제외한 남은 문자열 갱신
                break;
            }
        }
        //같아지면 s의 앞부터 그 i번째까지 자르고 그 앞부분을 없애기
            if (xCount !== other) {
            answer.push(s); // 문자열 s를 그대로 추가
            break;
        }
    }

    return answer.length;
}

/* 첫글자를 x라고 함 이 글자가 등장한 횟수을 셈
그 후 다른 글자 나오면 다른글자의 횟수를 셈(나는 알파벳따로인지 알았는데 x/다른 글자)
이 두 글자의 등장 횟수가 같아지면  멈추고 slice하기 
반복하다가 분리할 문자열이 없다면 종료, 만약 둘이 다른데 글자가 끝난다면 종료

먼저 객체를 만든 다음 s의 문자열을 읽어나감 s의 값에 +1하기 */