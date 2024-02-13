function solution(sizes) {
    var answer = 0;
    let long = [];
    let short = [];
    for(let i=0;i<sizes.length;i++){
        if(sizes[i][0]>sizes[i][1]){
            long.push(sizes[i][0])
            short.push(sizes[i][1])
        }else{
            long.push(sizes[i][1])
            short.push(sizes[i][0])
        }
    }
    let max_long= Math.max(...long)
    let max_short = Math.max(...short)
    return max_long*max_short;
}
//모든 명함이 들어갈 수 있는 크기가 되어야 한다 
//처음에는 일단 가로 세로 구분 없이 둘을 몰아놓을려고 했는데 그렇게 했다가는 하나가 두번선택될 수 있어
//근데 돌려도 된다 그러면 긴변과 짧은 변으로 나눠서 두근데로 push하고 그 중 큰 수를 가져와서 곱하자