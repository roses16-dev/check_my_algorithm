# 2023.06.08
# 피자 나눠 먹기 (1)

def solution(n):
    return n // 7 + (1 if n % 7 > 0 else 0)