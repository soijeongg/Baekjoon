-- USED_GOODS_BOARD와 USED_GOODS_REPLY 테이블에서 2022년 10월에 작성된 게시글 제목, 게시글 ID, 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일을 조회하는 SQL문을 작성
-- 글 작성일을 기준으로 오름차순 정렬 댓글 작성일이 같다면 게시글 제목을 기준으로 오름차순
SELECT TITLE,u.BOARD_ID,y.REPLY_ID, y.WRITER_ID, y.CONTENTS,date_format(y.CREATED_DATE,"%Y-%m-%d") as CREATED_DATE
from USED_GOODS_BOARD u
inner join USED_GOODS_REPLY y
on u.BOARD_ID = y.BOARD_ID
where u.CREATED_DATE >= '2022-10-01' AND u.CREATED_DATE < '2022-11-01'

order by y.CREATED_DATE asc ,TITLE asc