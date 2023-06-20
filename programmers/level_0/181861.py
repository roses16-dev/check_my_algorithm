# 2023.06.20
# 배열의 원소만큼 추가하기

def solution(arr):
    answer = []

    for e in arr:
      answer += [e] * e

    return answer