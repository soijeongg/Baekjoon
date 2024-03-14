function solution(ingredient) {
    let count =0;
    let stack=[];
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i])
        if(stack[stack.length-4]===1&&
           stack[stack.length-3]===2&&
           stack[stack.length-2]===3&&
           stack[stack.length-1]===1
          ){
            count++
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
        }
    }
    return count
}