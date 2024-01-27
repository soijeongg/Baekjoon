--  2022년 10월 5일에 등록된 중고거래 게시물의 게시글 ID, 작성자 ID, 게시글 제목, 가격, 거래상태를 조회하는 SQL문을 작성
-- 거래상태가 SALE 이면 판매중, RESERVED이면 예약중, DONE이면 거래완료 분류하여 출력
SELECT BOARD_ID,WRITER_ID,TITLE,PRICE,
(case when STATUS = 'SALE' then "판매중"
when STATUS = 'RESERVED' then "예약중" else "거래완료" end) as STATUS
from USED_GOODS_BOARD
where month(CREATED_DATE)=10 and year(CREATED_DATE)=2022 and day(CREATED_DATE)=5
order by BOARD_ID desc