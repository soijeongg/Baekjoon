--  입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성
--  보호 시작일 순으로 조회
SELECT i.NAME,i.DATETIME
from ANIMAL_INS i
left  join ANIMAL_OUTS o
ON i.ANIMAL_ID = o.ANIMAL_ID
where o.ANIMAL_ID is null
order by i.DATETIME asc
limit 3