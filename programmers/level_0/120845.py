# 2023.06.27
# 주사위의 개수

def solution(box, n):
    answer = 1

    for length in box:
        answer *= length // n

    return answer