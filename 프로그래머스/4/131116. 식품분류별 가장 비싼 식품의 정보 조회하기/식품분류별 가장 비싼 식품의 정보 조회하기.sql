-- 식품분류별로 가격이 제일 비싼 식품의 분류, 가격, 이름을 조회
-- 품분류가 '과자', '국', '김치', '식용유'인 경우만 출력
-- 식품 가격을 기준으로 내림차순 정렬
SELECT CATEGORY, max(PRICE) as MAX_PRICE ,PRODUCT_NAME
from FOOD_PRODUCT
where PRICE in(select max(PRICE) from FOOD_PRODUCT group by  CATEGORY )
group by CATEGORY
having CATEGORY in('과자', '국', '김치', '식용유')
order by max(PRICE) desc