function solution(s, n) {
    var answer = String(s).split("");
    let alphaA = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    answer = answer.map((e,v)=> {
        if(alphaA.includes(e)){
            return alphaA[(alphaA.indexOf(e)+n)]
        }else if(alphab.includes(e)){
            return alphab[(alphab.indexOf(e)+n)]
        }else{
            return e
        }
    })
    
    return answer.join("");
}