-- 만원 단위의 가격대 별로 상품 개수를 출력 
-- PRICE_GROUP, PRODUCTS로 지정해주시고 가격대 정보는 각 구간의 최소금액(10,000원 이상 ~ 20,000 미만인 구간인 경우 10,000)으로 표시
-- 가격대를 기준으로 오름차순 정렬
SELECT TRUNCATE(PRICE,-4) as PRICE_GROUP, count(*) as PRODUCTS
from PRODUCT
group by TRUNCATE(PRICE,-4)
order by PRICE_GROUP