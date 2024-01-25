-- 동물 보호소에 들어온 동물 중 젊은 동물1(INTAKE_CONDITION의 aged만 아니면 됨)
-- 의 아이디와 이름을 조회하는 SQL 문을 작성
SELECT ANIMAL_ID,NAME from ANIMAL_INS
where INTAKE_CONDITION!= "Aged" 
order by ANIMAL_ID