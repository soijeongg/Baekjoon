-- '경제' 카테고리에 속하는 도서들의 도서 ID(BOOK_ID), 저자명(AUTHOR_NAME), 출판일(PUBLISHED_DATE) 리스트를 출력하는 SQL
-- 결과는 출판일을 기준으로 오름차순 정렬
SELECT BOOK_ID, AUTHOR_NAME, date_format(PUBLISHED_DATE,"%Y-%m-%d") as PUBLISHED_DATE
from BOOK b
inner join AUTHOR a
on b.AUTHOR_ID =a.AUTHOR_ID
where CATEGORY = "경제"
order by PUBLISHED_DATE asc