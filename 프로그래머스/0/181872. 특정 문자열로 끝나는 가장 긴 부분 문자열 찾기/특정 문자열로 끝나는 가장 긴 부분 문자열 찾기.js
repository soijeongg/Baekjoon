function solution(myString, pat) {
    var answer = '';
    let last = myString.slice(0,myString.lastIndexOf(pat))
    return last+pat;
}