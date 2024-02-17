function solution(myString, pat) {
    var answer = 0;
    pat = pat.toLowerCase()
    myString = myString.toLowerCase()
    myString.includes(pat)?answer++:answer+=0
    return answer;
}