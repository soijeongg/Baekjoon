-- 양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요. 이때 고양이를 개보다 먼저 조회해주세요.
SELECT ANIMAL_TYPE, count(ANIMAL_TYPE) as count
from ANIMAL_INS
group by ANIMAL_TYPE
order by ANIMAL_TYPE