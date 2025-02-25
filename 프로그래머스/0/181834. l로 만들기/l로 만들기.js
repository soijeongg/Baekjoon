function solution(myString) {
    let alpa = 'abcdefghijk'
    let arr = myString.split('');
    for(let i=0;i<arr.length;i++) {
        if(alpa.includes(arr[i])){
            arr[i] ='l'
        }
    }
    var answer = arr.join('');
    return answer;
}