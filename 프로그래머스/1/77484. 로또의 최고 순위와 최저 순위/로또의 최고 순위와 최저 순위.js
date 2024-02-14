function solution(lottos, win_nums) {
    var answer = [];
    let count_0 =0;
    let match_num = 0;
    let win ={6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    lottos.forEach((e=>e==0?count_0++:0))
    //이제 맞는지를 찾아보자 
    for(let i=0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])){
            match_num++
        }
         
    }
    let real = [win[match_num+count_0],win[match_num]]
    return real;
}
//로또 1부터 45까지에서 숫자 6개를 찍어서 번호와 위치가 맞으면 됨
//근데 못알아보는 숫자가 있어서 못알아보는 숫자를 0으로 만들었다
//근데 내가 할수 있었던 최고점수와 최저점수를 알고 싶어
//근데 최고 점수는 그 0이였던게 전부 다 맞았을때(0의갯수+맞은개수)
//최저점수는 0이였던게 전부 틀렸을때 그냥 원래 맞은 개수만 나오게 