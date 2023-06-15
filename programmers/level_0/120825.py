# 2023.06.15
# 문자 반복 출력하기

def solution(my_string, n):
    return ''.join(c * n for c in my_string)