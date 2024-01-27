-- 자동차 종류가 '세단'인 자동차들 중 10월에 대여를 시작한 기록이 있는 자동차 ID 리스트를 출력
-- 자동차 ID 리스트는 중복이 없어야 하며, 자동차 ID를 기준으로 내림차순 정렬
SELECT DISTINCT h.CAR_ID
from CAR_RENTAL_COMPANY_RENTAL_HISTORY h
inner join CAR_RENTAL_COMPANY_CAR r
on h.CAR_ID = r.CAR_ID
where month(START_DATE)=10 and CAR_TYPE = "세단"
order by CAR_ID desc