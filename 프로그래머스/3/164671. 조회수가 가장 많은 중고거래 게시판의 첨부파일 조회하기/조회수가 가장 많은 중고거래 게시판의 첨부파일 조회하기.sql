--  조회수가 가장 높은 중고거래 게시물에 대한 첨부파일 경로를 조회하는 SQL문을 작성
-- 첨부파일 경로는 FILE ID를 기준으로 내림차순 정렬
-- 기본적인 파일경로는 /home/grep/src/   게시글 ID를 기준으로 디렉토리가 구분
-- 파일이름은 파일 ID, 파일 이름, 파일 확장자로 구성되도록 출력
SELECT concat("/home/grep/src/",b.BOARD_ID,"/",FILE_ID,FILE_NAME,FILE_EXT) as FILE_PATH
from USED_GOODS_FILE f
inner join USED_GOODS_BOARD b
on f.BOARD_ID =b.BOARD_ID
where VIEWS = (select max(VIEWS) from USED_GOODS_BOARD   )
order by FILE_ID desc
