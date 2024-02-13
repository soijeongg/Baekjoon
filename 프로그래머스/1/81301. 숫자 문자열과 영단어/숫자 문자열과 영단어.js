function solution(s) {
    var answer = 0;
    let number = ['zero','one','two','three','four','five','six','seven','eight','nine']
   number.forEach((e, i) => {
        s = s.split(e).join(i)    
    })

    return Number(s);
}