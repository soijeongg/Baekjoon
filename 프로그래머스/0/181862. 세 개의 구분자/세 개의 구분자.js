function solution(myStr) {
    var answer = [];
   myStr =  myStr.split("a").join("#").split("b").join("#").split("c").join("#").split("#")
   myStr = myStr.filter((e,v)=> e.length!==0)
    if(myStr.length===0){
        return ["EMPTY"]
    }
    return myStr;
    
    //일단 split으로 나누고 만약 있으면 다 지우저
}