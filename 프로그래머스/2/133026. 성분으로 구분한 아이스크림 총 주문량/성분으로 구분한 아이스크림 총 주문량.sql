-- 상반기 동안 각 아이스크림 성분 타입과 성분 타입에  아이스크림의 총주문량을 총주문량이 작은 순서대로 조회하는 SQL 
SELECT i.INGREDIENT_TYPE,sum(TOTAL_ORDER) as TOTAL_ORDER
from ICECREAM_INFO i
inner join FIRST_HALF f
on f.FLAVOR = i.FLAVOR
group by INGREDIENT_TYPE
order by  TOTAL_ORDER asc
