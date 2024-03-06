def solution(code):
    ret = ""
    mode = 0

    for idx in range(len(code)):
        if code[idx] == "1":
            mode = 1 - mode

        else:
            if mode == 0 and idx % 2 == 0:
                ret += code[idx]
            elif mode == 1 and idx % 2 == 1:
                ret += code[idx]

    if ret == "":
        return "EMPTY"

    else:
        return ret
""" 문자열이 주어지는데 이름이 code 이건 알파벳 소문자 또는 1로만 이루어짐
    먄약 문자가 1이면 모드를 바꾼다 (이건 for문으로 넣으면 될거 같음)
    모드는 0or1 이 있으며 
    0일때: code[idx]가 1이 아니면 idx가 짝 수 일때만 ret뒤에 추가 
            code가 1이면 모드 바꾸기
            
    1일때: 1이면 모드 바꾸고 1이면 ret뒤에 code[idx]를 추가 
    시작할때 모드는 0이며 ret가 빈 문자열이면 "EMPTY" """