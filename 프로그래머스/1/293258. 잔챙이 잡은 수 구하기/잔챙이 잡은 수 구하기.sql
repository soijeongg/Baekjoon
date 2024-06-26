-- 잡은 물고기 중 10cm 이하인 물고기의 수를 출력 count쓰자 
select count(*) as FISH_COUNT
from FISH_INFO
where LENGTH is null