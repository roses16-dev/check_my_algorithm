# 2023.05.11
# 등차수열의 특정한 항만 더하기

def solution(a, d, included):
    answer = 0

    for i in range(len(included)):
        answer += a + (i * d) if included[i] else 0

    return answer