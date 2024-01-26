--  2022년 5월에 예약한 환자 수를 진료과코드 별로 조회하는 SQL문을 작성
--  '진료과 코드', '5월예약건수'로 지정 결과는 진료과별 예약한 환자 수 오름차순 정렬, 진료과 코드 오름차순 정렬
SELECT MCDP_CD as "진료과코드", count(APNT_YMD) as "5월예약건수" from APPOINTMENT
where month(APNT_YMD)=5 and year(APNT_YMD)=2022
group by MCDP_CD
order by 2 asc, 1 asc