# 2023.05.14
# 조건에 맞게 수열 변환하기 3

def solution(arr, k):
    return [e + k if k % 2 == 0 else e * k for e in arr]