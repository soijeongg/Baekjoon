function solution(num_list) {
    var answer = 0;
    let odd=0;
    let even=0;
    var answer = num_list.forEach((num_list)=>{
            if(num_list%2==1){
             odd+= String(num_list)
        }
            if(num_list%2==0){
            even+= String(num_list)
            } })
    
       
                         
    return Number(odd)+Number(even) ;
        
}