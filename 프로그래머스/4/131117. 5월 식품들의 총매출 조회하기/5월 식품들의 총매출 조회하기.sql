--  생산일자가 2022년 5월인 식품들의 식품 ID, 식품 이름, 총매출을 조회하는 SQL문을 작성
-- 총매출을 기준으로 내림차순 정렬  식품 ID를 기준으로 오름차순 정렬
-- 총 매출은 주문량* 가격
SELECT p.PRODUCT_ID,PRODUCT_NAME,sum(PRICE*AMOUNT) as TOTAL_SALES

from FOOD_PRODUCT p
inner join FOOD_ORDER o
on p.PRODUCT_ID = o.PRODUCT_ID
where year(PRODUCE_DATE) = 2022 and month(PRODUCE_DATE) =5
group by PRODUCT_ID
order by TOTAL_SALES desc ,p.PRODUCT_ID asc