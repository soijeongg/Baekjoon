function solution(num_list, n) {
    var answer = [[]];
    let nums=[]
    for(let i=0;i<num_list.length;i+=n){
       nums.push(num_list.slice(i,i+n))     }
    return nums;
}

//n개씩 나눠서 리턴 일단 n개씩 나눌까?