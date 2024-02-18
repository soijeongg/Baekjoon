function solution(arr) {
    var answer = [[]];
    let a = arr.length
    let v = arr[0].length
    if(a==v)return arr
    //행이 더 클경우 
    if(a>v){
        while(arr[arr.length-1].length!==arr.length){
            for(let i =0;i<arr.length;i++){
                arr[i].push(0)
            }
        }
    }else if(a<v){
        for(let i=0;i<v-a;i++){
                    arr.push((Array(v).fill(0)))}
              }
          
    
    

    return arr;
}
//이차원 정수 배열이 주어집니다 행과열이 뭔말인지 모르겟어
//아 행이 몇개인지이고 열이 그안애 몇개인지? 만약 이 길이 ㄸ