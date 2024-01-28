-- 음식종류별로 즐겨찾기수가 가장 많은 식당
-- 음식 종류, ID, 식당 이름, 즐겨찾기수를 조회하는 SQL문을 작성
-- 음식 종류를 기준으로 내림차순 정렬
SELECT FOOD_TYPE,REST_ID,REST_NAME, FAVORITES
from REST_INFO
WHERE FAVORITES in (SELECT MAX(FAVORITES) frOM REST_INFO group by FOOD_TYPE )
group by FOOD_TYPE

order by FOOD_TYPE desc