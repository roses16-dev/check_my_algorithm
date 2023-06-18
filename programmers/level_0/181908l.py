# 2023.06.18
# 접미사인지 확인하기

def solution(my_string, is_suffix):
    return int(is_suffix == my_string[-len(is_suffix):])