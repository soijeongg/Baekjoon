function solution(arr) {
    var answer = [];
    let real = arr.slice().sort((a,b)=> a-b); //오름자순으로 정렬 
    real = real.shift();
   
    let ss = arr.filter(index => index !==real);
    if(ss.length ==0){
        ss.push(-1);
    }
   
    return ss;
}