-- 동물 이름 중, 이름에 "EL"이 들어가는 개의 아이디와 이름을 조회하는 SQL문을 작성
-- 결과는 이름 순으로 조회
SELECT ANIMAL_ID,NAME 
from ANIMAL_INS
where ANIMAL_TYPE = "Dog"  and(NAME like "%EL%" or NAME like "%el%")
order by name