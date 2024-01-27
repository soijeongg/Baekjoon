-- 2022년 1월의 카테고리 별 도서 판매량을 합산,CATEGORY,TOTAL_SALES
-- 카테고리명을 기준으로 오름차순 정렬
SELECT CATEGORY, sum(SALES) as TOTAL_SALES
from BOOK
inner join BOOK_SALES
on BOOK.BOOK_ID = BOOK_SALES.BOOK_ID
where month(SALES_DATE)= 1 and year(SALES_DATE)=2022
group by CATEGORY
order by CATEGORY asc