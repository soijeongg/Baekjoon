--  중고 거래의 총금액이 70만 원 이상인 사람의 회원 ID, 닉네임, 총거래금액을 조회하는 SQL문을 작성
-- 총거래금액을 기준으로 오름차순 정렬
SELECT u.USER_ID, u.NICKNAME,sum(b.PRICE) as TOTAL_SALES
from USED_GOODS_USER u
inner join USED_GOODS_BOARD b
on u.USER_ID = b.WRITER_ID
where STATUS = "DONE"
group by USER_ID
having sum(b.PRICE)>=700000
order by TOTAL_SALES asc