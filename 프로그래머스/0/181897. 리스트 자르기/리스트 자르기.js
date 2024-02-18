function solution(n, slicer, num_list) {
    var answer = [];
    if(n==1){
        answer = num_list.slice(0,slicer[1]+1)
    }else if(n==2){
        answer = num_list.slice(slicer[0])
    }else if(n==3){
        answer = num_list.slice(slicer[0],slicer[1]+1)
    }else{
        answer = num_list.slice(slicer[0], slicer[1] + 1).filter((_, index) => index % slicer[2] === 0);
       
    }
    return answer;
}
//정수 n과 정수3개가 담긴 리스트가 주어짐 이 리스트에 담긴 
//n이 1,2,3,4,중 하나 이걸 찾아서 