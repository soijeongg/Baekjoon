#20번 동안 반복
sum_score=0
sn2=0
bord = {"A+":4.5,"A0":4.0,"B+":3.5,"B0":3.0,"C+":2.5,"C0":2.0,"D+":1.5,"D0":1.0,"F":0}

for i in range(20):
 #name은 과목 이름 sn는 그 과목 당 학점 score는 등급
    name, sn, score = input().split()
  #sn은 소수 형태여서 float로 
    sn = float(sn)
  #등급 당 점수 
    if bord.get(score)!= None:
        sum_score+=bord[score]*sn
        sn2 += sn
print(sum_score/sn2)