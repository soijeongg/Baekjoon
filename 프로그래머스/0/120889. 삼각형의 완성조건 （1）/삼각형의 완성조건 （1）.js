function solution(sides) {
    var answer = 0;
    let max_num =  Math.max.apply(null,sides);
    let max_nums = sides.indexOf(max_num);
    sides = sides.filter((element,index) =>index !== max_nums);
    let two_sum = sides[0]+sides[1]
    if (two_sum>max_num){
        answer=1;
    }else{
        answer=2;
    }

    
    return answer;
}