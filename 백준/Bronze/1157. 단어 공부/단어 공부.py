#입력한게 대소문자 구분 X여서 그냥 다 대문자
word= input().upper()
#중복 삭제 해서 list에 넣기
word_list = list(set(word))
new_list = []
#이러면 글자 한글자씩 리스트에 들어감
for i in word_list:
    new_list.append(word.count(i))
#이러면 하나씩 갯수를 셀 수 있다 이걸 새 list에 넣기 
#이러면 word와 
#여기서 제일 큰거 찾기,근데 2개이상이면 ? 출력
max_num = max(new_list)
if new_list.count(max_num)>=2:
    print("?")
#제일 큰거 하나 나오면 그걸 list에서 위치찾아 다시 word에서 찾기
else:
    print(word_list[new_list.index(max_num)])
