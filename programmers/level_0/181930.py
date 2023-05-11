# 2023.05.11
# 주사위 게임 2

def solution(a, b, c):
    answer = 1;

    for i in range(1, 5 - len(set([a, b, c]))):
        answer *= (a**(i) + b**(i) + c**(i))

    return answer