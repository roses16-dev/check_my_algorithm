# 2023.05.12
# 글자 이어 붙여 문자열 만들기

def solution(my_string, index_list):
    answer = ''.join(my_string[index] for index in index_list)
    return answer