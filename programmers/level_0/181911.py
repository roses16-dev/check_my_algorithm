# 2023.06.26
# 부분 문자열 이어 붙여 문자열 만들기

def solution(my_strings, parts):
    answer = ''

    for index, [start, end] in enumerate(parts):
        answer += my_strings[index][start:end+1]

    return answer