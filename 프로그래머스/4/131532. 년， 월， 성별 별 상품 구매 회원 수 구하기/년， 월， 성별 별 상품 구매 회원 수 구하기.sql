-- USER_INFO 테이블과 ONLINE_SALE 테이블에서 년, 월, 성별 별로 상품을 구매한 회원수를 집계(sum 을 써야 할까)
-- 년, 월, 성별을 기준으로 오름차순 정렬  성별 정보가 없는 경우 결과에서 제외(where is null)
SELECT year(SALES_DATE) as YEAR,
        month(SALES_DATE) as MONTH ,
        GENDER,
        count( DISTINCT i.user_id) as USERS
        
from USER_INFO i

inner join ONLINE_SALE o
on i.USER_ID = o.USER_ID
where GENDER is not null
group by year(SALES_DATE),month(SALES_DATE),GENDER


order by YEAR asc, MONTH asc, GENDER asc