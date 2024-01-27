-- 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성
SELECT o.ANIMAL_ID, o.name
from ANIMAL_OUTS o
left join ANIMAL_INS i
on o.ANIMAL_ID = i.ANIMAL_ID
where i.ANIMAL_ID is null