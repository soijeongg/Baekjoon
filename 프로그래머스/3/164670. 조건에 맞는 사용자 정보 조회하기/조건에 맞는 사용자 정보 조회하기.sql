--  중고 거래 게시물을 3건 이상 등록한 사용자
-- 사용자 ID, 닉네임, 전체주소, 전화번호를 조회
--  전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력  전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(-)을 삽입하여 출력
-- 결과는 회원 ID를 기준으로 내림차순 정렬
SELECT DISTINCT USER_ID,NICKNAME, CONCAT(CITY,  " ",STREET_ADDRESS1, " ", STREET_ADDRESS2) AS '전체주소',
concat(SUBSTRING(TLNO from 1 for 3),"-",SUBSTRING(TLNO from 4 for 4),"-",SUBSTRING(TLNO from 8 for 4)) as "전화번호"
from USED_GOODS_USER u
inner join USED_GOODS_BOARD d
on u.USER_ID = d.WRITER_ID
where USER_ID  in (select WRITER_ID from  USED_GOODS_BOARD  group by WRITER_ID having count(WRITER_ID)>=3)
order by USER_ID desc