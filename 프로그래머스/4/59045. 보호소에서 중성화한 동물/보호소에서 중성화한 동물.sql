-- 보호소에 들어올 당시에는 중성화1되지 않았지만, 보호소를 나갈 당시에는 중성화
-- 성별 및 중성화 여부에 Intact, 중성화를 거친 동물은 Spayed 또는 Neutered라고 표시
-- 동물의 아이디와 생물 종, 이름을 조회하는 아이디 순으로 조회
SELECT o.ANIMAL_ID,o.ANIMAL_TYPE,o.NAME
from ANIMAL_OUTS o
inner join ANIMAL_INS i
on o.ANIMAL_ID = i.ANIMAL_ID
where i.SEX_UPON_INTAKE like"%Intact%" and (o.SEX_UPON_OUTCOME  like"%Spayed%"   or o.SEX_UPON_OUTCOME like "%Neutered%")