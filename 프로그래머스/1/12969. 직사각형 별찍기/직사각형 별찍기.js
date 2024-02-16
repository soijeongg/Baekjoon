process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
});


//먼저 utf8로 인코딩할것이다(이거 html 에서 많이 봤었는데) 문자열로 받기 위햄
//입력에서 읽어온 데이터를 data라는 이름으로 명명
//데이터를 " "기준으로 둘로 나눔 첫번째를 a 두번째를 b
//별찍기라 해서 피라미드 말하는지 알았는데 사각형
//그래서 콘솔로그 해서 "*"를 repeat 그리고 이거 어차피 \n이니까 for로 반복