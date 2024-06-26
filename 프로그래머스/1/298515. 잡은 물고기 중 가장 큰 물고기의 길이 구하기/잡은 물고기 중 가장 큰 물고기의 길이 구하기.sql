--  잡은 물고기 중 가장 큰 물고기의 길이를 'cm' 를 붙여 출력하는 SQL 문을 작성
select  concat(Length ,"cm") as MAX_LENGTH
from FISH_INFO
where Length in(select max(length) from FISH_INFO)