-- 아이디와 이름, 들어온 날짜1를 조회 (시각(시-분-초)을 제외한 날짜(년-월-일)만)
-- 아이디 순으로 조회
SELECT ANIMAL_ID,NAME,date_format(DATETIME,"%Y-%m-%d") as "날짜"
from ANIMAL_INS
order by ANIMAL_ID asc