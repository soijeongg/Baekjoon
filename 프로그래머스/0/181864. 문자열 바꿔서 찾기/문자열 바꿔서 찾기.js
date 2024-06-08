function solution(myString, pat) {
    var answer = 0;
    answer = myString.split("").map(e => {if (e =="A") {
        return 'B';
    }
    else if (e =="B") {
        return "A"
    }else {
        return e
    }
     });
    answer  = answer.join('');
   return  answer.includes(pat)?1:0;
    
}

//문자열 a,b로 이루어진 문자열 두개가 주어진다 
//myString "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 ㅇ; 중에서 pat이 있으면 1 없으면 0