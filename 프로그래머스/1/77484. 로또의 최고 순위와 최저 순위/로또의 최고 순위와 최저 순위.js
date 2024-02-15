function solution(lottos, win_nums) {
    var answer = [];
    let count_0 =0;
    let match_num = 0;
    let win ={6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    lottos.forEach((e=>e==0?count_0++:0)) //0의 갯수 세기
    //이제 맞는지를 찾아보자 
    for(let i=0;i<lottos.length;i++){
        if(win_nums.includes(lottos[i])){
            match_num++
        }
         //처음에는 인덱스까지 맞혀야 하는지 알았는지 있으면 올라가는거라서
        //for문을 돌려 로또의 i가 win_nums에 있는지 확인 있으면 맞춘거 올리기
        //최고 0인거 +맞춘거 /최저 맞춘거만
        //이걸 만들어놓은 맞은거:순위인 객체에 넣어 확인
    }
    let reala = [win[match_num+count_0],win[match_num]]
    return reala;
}
