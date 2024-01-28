--  서울에 위치한 식당들의 식당 ID, 식당 이름, 음식 종류, 즐겨찾기수, 주소, 리뷰 평균 점수를 조회하는 SQL문을 작성
-- 리뷰 평균점수는 소수점 세 번째 자리에서 반올림
-- 결과는 평균점수를 기준으로 내림차순 정렬,   즐겨찾기수를 기준으로 내림차순 정렬

SELECT o.REST_ID,REST_NAME,FOOD_TYPE,FAVORITES,ADDRESS,round(avg(REVIEW_SCORE),2) as SCORE
from REST_INFO o
inner join REST_REVIEW w
on o.REST_ID = w.REST_ID
where SUBSTRING(ADDRESS,1,2) = "서울"
group by REST_NAME
order by SCORE desc, FAVORITES desc