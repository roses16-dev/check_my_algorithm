# 2023.06.19
# 접두사인지 확인하기

def solution(my_string, is_prefix):
    return int(my_string[:len(is_prefix)] == is_prefix)