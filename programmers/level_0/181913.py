# 2023.05.12
# 문자열 여러 번 뒤집기

def solution(my_string, queries):
    str_list = list(my_string)

    for s, e in queries:
        str_list[s:e+1] = str_list[s:e+1][::-1]

    return ''.join(str_list)