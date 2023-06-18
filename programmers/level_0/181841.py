# 2023.06.18
# 꼬리 문자열

def solution(str_list, ex):
    arr =  [s for s in str_list if ex not in s]
    return ''.join(arr)