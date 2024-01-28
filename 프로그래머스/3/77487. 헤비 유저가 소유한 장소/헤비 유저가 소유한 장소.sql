-- 공간을 둘 이상 등록한 사람이 등록한 공간의 정보를 아이디 순으로 조회 (호스트 아이디가 2개 이상인 사람들)
-- 예시를 보니까 그룹바이로 묶어서 할려고 했는데 호스트 아이디가 묶이지 않고 다나와서 묶인값을 서브쿼리로 넣어야 한다 
-- 먼저 공간을 둘이상 등록한 사람 찾기(group으로 해서 having)
SELECT *
FROM PLACES
WHERE HOST_ID IN (
    SELECT HOST_ID
    FROM PLACES
    GROUP BY HOST_ID
    HAVING COUNT(HOST_ID) >= 2
)
ORDER BY ID;