function solution(keymap, targets) {
    const keyMap = {};
    
    keymap.forEach(key => {
        [ ...key ].forEach((el,idx) => {
            if (el in keyMap){
                keyMap[el] = keyMap[el]<idx+1 ? keyMap[el] : idx +1
            } else keyMap[el] = idx+1
        })
    })
    
    return targets.map(el => [ ...el ].reduce((a,c,idx,arr) => {
        if(!keyMap[c]) {arr.splice(1); return -1}
        return a+keyMap[c]
    },0));
}
//휴대폰 자판은 하나의 키에 여러 키가 들어감 
//keymap에 한 인덱스에 하나르 ㄹ몇번 눌어야 하는지 나옴 
//for 문을 돌려서 키맵의 몇번에 있는지를 확인하고 그 안에서 for를 돌려서 몇번째 인지 확인
