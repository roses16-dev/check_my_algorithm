# 2023.07.02
# 기사단원의 무기

def solution(number, limit, power):
    answer = 1

    for knight_num in range(2, number+1):
        knight_attack = 2
        for n in range(2, int(knight_num ** 0.5 + 1)):
            if knight_num % n == 0:
                if knight_num / n != n:
                  knight_attack += 2
                else:
                  knight_attack += 1

        if knight_attack > limit:
            answer += power
        else:
            answer += knight_attack

    return answer