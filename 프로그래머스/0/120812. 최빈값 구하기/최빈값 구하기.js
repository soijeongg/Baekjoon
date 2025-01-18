function solution(array) {
    var answer = {};
    let num =0
    let mode =0
    if(array.length ==1){
        return array[0]
    }else {
        for(let  i=0; i<array.length;i++) {
        let num = array[i];
        if (!answer[num]) {
            answer[num] = 1; 
        } else {
            answer[num] += 1; 
        }
    }
    }

    for(let i in answer){
        if(answer[i]>num) {
            num  = answer[i]
            mode = Number(i)
        }
        else if(answer[i] == num) {
            mode = -1
        }
    }
    return mode;
}