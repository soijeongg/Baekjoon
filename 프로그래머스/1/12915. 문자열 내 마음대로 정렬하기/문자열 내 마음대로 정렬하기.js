function solution(strings, n) {
    //그러니까 n이 각각의 인덱스로 들어가 배열을 만든다
    //이글자가 어디서 왔는지가 중요한거야?? 그럼 뒤에 숫자 0,1,2붙이고 알파벳으로 정렬한 다음 
    
    
    strings.sort((a, b) => {
    let alphaA = a[n];
    let alphaB = b[n]
        if (alphaA === alphaB) {
            return a.localeCompare(b)
        } else {
            return alphaA.localeCompare(alphaB);
        }

  
});
    
   
    return strings;
}