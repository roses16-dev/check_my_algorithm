# 2023.06.18
# 배열의 길이에 따라 다른 연산하기

def solution(arr, n):
    if len(arr) % 2:
        for index in range(0, len(arr), 2): arr[index] += n
    else:
        for index in range(0, len(arr), 2): arr[index] += n
    return arr