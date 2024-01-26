-- 3월인 여성 회원의 ID, 이름, 성별, 생년월일을 조회하는 SQL문  전화번호가 NULL인 경우는 출력대상에서 제외시켜 주시고
--  회원ID를 기준으로 오름차순 정렬
SELECT MEMBER_ID,MEMBER_NAME,GENDER,date_format(DATE_OF_BIRTH,"%Y-%m-%d") as DATE_OF_BIRTH
from MEMBER_PROFILE
where month(DATE_OF_BIRTH)=3 and GENDER = "W" and TLNO is not null
order by MEMBER_ID