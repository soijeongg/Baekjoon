-- PRODUCT 테이블과 OFFLINE_SALE 테이블에서 상품코드 별 매출액(판매가 * 판매량) 합계를 출력
-- 결과는 매출액을 기준으로 내림차순 정렬 품코드를 기준으로 오름차순 정렬
select PRODUCT_CODE,sum(p.PRICE* o.SALES_AMOUNT) as SALES
from PRODUCT p
inner join OFFLINE_SALE o
on p.PRODUCT_ID = o.PRODUCT_ID
group by PRODUCT_CODE 
order by SALES desc, PRODUCT_CODE asc