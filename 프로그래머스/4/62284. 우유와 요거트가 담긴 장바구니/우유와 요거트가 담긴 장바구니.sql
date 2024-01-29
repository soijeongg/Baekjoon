--  우유(Milk)와 요거트(Yogurt)를 동시에 구입한 장바구니가 있는지
--  장바구니의 아이디 순
-- 우유와 요거트 둘다 있는 바구니(장바구니 아이디로 묶었는데 having에 우유와 요거트 둘다?
-- 이거 in으로 
SELECT CART_ID
FROM CART_PRODUCTS
WHERE name IN ('Milk', 'Yogurt')
GROUP BY CART_ID
HAVING COUNT(DISTINCT name) = 2;
