# 2023.05.10
# 공배수

def solution(number, n, m):
    answer = int(number % m == 0 and number % n == 0)
    return answer