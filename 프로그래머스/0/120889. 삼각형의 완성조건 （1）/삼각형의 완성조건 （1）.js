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
    //3개의 값이 들어있는 배열이 주어진다 가장 긴 변의 길이는 다른 두변의 길이합보다 작아야 한다
    //이것도 같은 값이 나올 수 있겠다
    
    return answer;
}