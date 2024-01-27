-- 입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회하는 SQL문을 작성
-- 보호 기간이 긴 순으로 조회
SELECT o.ANIMAL_ID,o.NAME
from ANIMAL_OUTS o
inner join ANIMAL_INS i
on i.ANIMAL_ID = o.ANIMAL_ID
where o.DATETIME is not null 
order by o.DATETIME-i.DATETIME desc
limit 2