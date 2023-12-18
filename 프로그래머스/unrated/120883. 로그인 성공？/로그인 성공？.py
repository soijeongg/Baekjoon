def solution(id_pw, db):
    answer = 'fail'
    login= id_pw[0] 
    password = id_pw[1]
    
    for i in db:
        if i[0]== login:
            if i[1] == password:
                answer ="login"
            else:
                answer ="wrong pw"
               
    return answer

#id_pw에 로그인 정보가 담긴다 db에는 회원들의 정보가 담긴다
#아이디와 로그인 모두 일치 하는 번호가 있으면 login을 리턴
#일단 id_pw에[0]을 login으로 설정 [1]은 password
#이제 for 문을 돌려서 i[0]이랑 login맞는지 확인
#맞으면i[1]과 password확인 -> 맞으면 로그인 반환 아니면 wrong pw반환
#아예 없으면 fail