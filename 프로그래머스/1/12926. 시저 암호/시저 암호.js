function solution(s, n) {
    var answer = String(s).split("");
    let alphaA = 'abcdefghijklmnopqrstuvwxyz';
    let alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    answer = answer.map((e,v)=> {
        if(alphaA.includes(e)){
            return alphaA[(alphaA.indexOf(e)+n)%26]
        }else if(alphab.includes(e)){
            return alphab[(alphab.indexOf(e)+n)%26]
        }else{
            return e
        }
    })
    
    return answer.join("");
}