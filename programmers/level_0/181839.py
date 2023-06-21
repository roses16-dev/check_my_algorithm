# 2023.06.21
# 주사위 게임 1

def solution(a, b):
    if (a + b) % 2 != 0:
        return 2 * (a + b)
    elif a % 2 != 0:
        return a * a + b * b
    else:
        return abs(a-b)