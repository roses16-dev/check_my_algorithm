# 2023.07.02
# 피자 나눠 먹기 (2)

def solution(n):
    answer = 1

    while True:
        if (6 * answer) % n == 0:
            return answer
        
        answer += 1