function solution(n, control) {
    var answer = 0;
   for(let i of control.split("")){
       if(i=="w"){
           n++
       }else if(i =="s"){
           n--
       }else if(i== "d"){
           n+=10
       }else if(i =="a"){
           n-=10
       }
      
   }
    return n;
}
//control = ["w", "a", "s", "d]
//들어오면 n을 바꿈