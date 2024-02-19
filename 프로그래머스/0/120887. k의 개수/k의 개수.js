function solution(i, j, k) {
    var answer = 0;
    let num_list = []
    for(let s =i;s<=j;s++){
        num_list.push(s)
    }
  num_list = num_list.join("").split("")
  num_list =   num_list.filter((e)=> e==k)
    return num_list.length;
}