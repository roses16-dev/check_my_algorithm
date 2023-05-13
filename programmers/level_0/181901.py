# 2023.05.13
# 배열 만들기 1

def solution(n, k):
    answer = []
    for i in range(1, n+1):
        if i % k == 0:
          answer.append(i)
    return answer